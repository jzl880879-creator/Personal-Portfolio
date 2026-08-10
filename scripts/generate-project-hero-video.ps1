$ErrorActionPreference = 'Stop'

$projectRoot = Split-Path -Parent $PSScriptRoot
$publicRoot = Join-Path $projectRoot 'public'
$outputDirectory = Join-Path $publicRoot 'project-overview'
$outputVideo = Join-Path $outputDirectory 'project-archive-hero.mp4'
$outputPoster = Join-Path $outputDirectory 'project-archive-hero-poster.jpg'

$ffmpeg = Get-ChildItem -LiteralPath (Join-Path $env:LOCALAPPDATA 'pnpm') -Filter ffmpeg.exe -File -Recurse -ErrorAction SilentlyContinue |
  Where-Object { $_.FullName -match 'ffmpeg-static' } |
  Sort-Object LastWriteTime -Descending |
  Select-Object -First 1 -ExpandProperty FullName

if (-not $ffmpeg) {
  throw 'ffmpeg-static was not found in the local pnpm cache.'
}

$covers = @(
  'project-overview/car-inflator.webp',
  'project-overview/outdoor-pump.webp',
  'project-overview/robot-vacuum.webp',
  'project-overview/herb-grinder.jpg',
  'project-overview/parking-pressure-gauge.webp',
  'project-overview/smart-parking-inflator-gallery/slide-06.webp',
  'project-overview/bluetooth-speaker-card-cover-clean.png',
  'project-overview/pos-terminal.webp',
  'project-overview/water-tester.webp',
  'project-overview/cbd-vape-gallery/slide-01.webp',
  'project-overview/pod-vape-gallery/slide-01.webp',
  'project-overview/disposable-cbd-vape-gallery/slide-01.webp',
  'project-overview/retro-disposable-vape-gallery/slide-01.webp',
  'project-overview/stove-flame-cover-gallery/slide-01.webp',
  'project-overview/steel-vase-tray-gallery/slide-01.webp',
  'project-overview/incense-set-gallery/slide-01.webp',
  'project-overview/cbct-card-cover.png',
  'project-overview/ear-thermometer-card-cover-clean.png',
  'project-overview/laser-therapy-card-cover-clean.png',
  'project-overview/fetal-monitor-gallery/slide-01.webp',
  'project-overview/blood-analyzer-gallery/slide-01.webp',
  'project-overview/medical-console-gallery/slide-01.webp',
  'project-overview/medical-nebulizer-gallery/slide-01.jpg',
  'project-overview/gaming-chair-gallery/slide-01.webp',
  'project-overview/lottery-machine-gallery/slide-01.webp',
  'project-overview/game-controller-gallery/slide-01.webp',
  'project-overview/ultrapure-water-gallery/slide-01.webp',
  'project-overview/runway-inspector-gallery/slide-01.webp',
  'project-overview/weather-station-gallery/slide-01.webp',
  'project-overview/smart-collection-robot-gallery/slide-01.webp'
) | ForEach-Object { Join-Path $publicRoot $_ }

$missing = $covers | Where-Object { -not (Test-Path -LiteralPath $_) }
if ($missing) {
  throw "Missing project covers:`n$($missing -join "`n")"
}

$slideDuration = 1.5
$transitionDuration = 0.35
$segmentDuration = $slideDuration - $transitionDuration
$arguments = @('-y', '-hide_banner', '-loglevel', 'warning')

foreach ($cover in $covers) {
  $arguments += @('-loop', '1', '-framerate', '30', '-t', $slideDuration.ToString('0.00', [Globalization.CultureInfo]::InvariantCulture), '-i', $cover)
}

$filters = [Collections.Generic.List[string]]::new()
for ($index = 0; $index -lt $covers.Count; $index++) {
  $filters.Add("[$index`:v]scale=1920:1080:force_original_aspect_ratio=increase,crop=1920:1080,setsar=1,settb=AVTB,fps=30,format=yuv420p,setpts=PTS-STARTPTS[v$index]")
}

$previous = 'v0'
for ($index = 1; $index -lt $covers.Count; $index++) {
  $output = "mix$index"
  $offset = ($segmentDuration * $index).ToString('0.00', [Globalization.CultureInfo]::InvariantCulture)
  $filters.Add("[$previous][v$index]xfade=transition=fade:duration=$transitionDuration`:offset=$offset[$output]")
  $previous = $output
}

$arguments += @(
  '-filter_complex', ($filters -join ';'),
  '-map', "[$previous]",
  '-an',
  '-c:v', 'libx264',
  '-preset', 'medium',
  '-crf', '21',
  '-pix_fmt', 'yuv420p',
  '-movflags', '+faststart',
  $outputVideo
)

& $ffmpeg @arguments
if ($LASTEXITCODE -ne 0) {
  throw "Video encoding failed with exit code $LASTEXITCODE."
}

& $ffmpeg -y -hide_banner -loglevel warning -ss 0.2 -i $outputVideo -frames:v 1 -q:v 2 $outputPoster
if ($LASTEXITCODE -ne 0) {
  throw "Poster extraction failed with exit code $LASTEXITCODE."
}

Get-Item -LiteralPath $outputVideo, $outputPoster | Select-Object Name, Length, LastWriteTime
