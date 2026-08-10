import React, { useEffect, useMemo, useRef, useState } from 'react'
import { ArrowLeft, ArrowUpRight, Mail, X } from 'lucide-react'
import './project-overview.css'

const carInflatorImages = Array.from(
  { length: 7 },
  (_, index) => `/project-overview/car-inflator-gallery/slide-${String(index + 1).padStart(2, '0')}.png`,
)

const outdoorPumpImages = Array.from(
  { length: 7 },
  (_, index) => `/project-overview/outdoor-pump-gallery/slide-${String(index + 1).padStart(2, '0')}.png`,
)

const robotVacuumImages = Array.from(
  { length: 10 },
  (_, index) => `/project-overview/robot-vacuum-gallery/slide-${String(index + 1).padStart(2, '0')}.webp`,
)

const parkingGaugeImages = Array.from(
  { length: 7 },
  (_, index) => `/project-overview/parking-gauge-gallery/slide-${String(index + 1).padStart(2, '0')}.webp`,
)

const grinderImages = Array.from(
  { length: 5 },
  (_, index) => `/project-overview/grinder-gallery/slide-${String(index + 1).padStart(2, '0')}.webp`,
)

const bluetoothSpeakerImages = Array.from(
  { length: 5 },
  (_, index) => `/project-overview/bluetooth-speaker-gallery/slide-${String(index + 1).padStart(2, '0')}-clean.png`,
)

const posTerminalImages = Array.from(
  { length: 7 },
  (_, index) => `/project-overview/pos-terminal-gallery/slide-${String(index + 1).padStart(2, '0')}.webp`,
)

const waterTesterImages = Array.from(
  { length: 4 },
  (_, index) => `/project-overview/water-tester-gallery/slide-${String(index + 1).padStart(2, '0')}.webp`,
)

const smartParkingInflatorImages = Array.from(
  { length: 7 },
  (_, index) => `/project-overview/smart-parking-inflator-gallery/slide-${String(index + 1).padStart(2, '0')}.webp`,
)

const retroDisposableVapeImages = Array.from(
  { length: 9 },
  (_, index) => `/project-overview/retro-disposable-vape-gallery/slide-${String(index + 1).padStart(2, '0')}.webp`,
)

const cbdVapeImages = Array.from(
  { length: 5 },
  (_, index) => `/project-overview/cbd-vape-gallery/slide-${String(index + 1).padStart(2, '0')}.webp`,
)

const podVapeImages = Array.from(
  { length: 5 },
  (_, index) => `/project-overview/pod-vape-gallery/slide-${String(index + 1).padStart(2, '0')}.webp`,
)

const disposableCbdVapeImages = Array.from(
  { length: 5 },
  (_, index) => `/project-overview/disposable-cbd-vape-gallery/slide-${String(index + 1).padStart(2, '0')}.webp`,
)

const stoveFlameCoverImages = Array.from(
  { length: 9 },
  (_, index) => `/project-overview/stove-flame-cover-gallery/slide-${String(index + 1).padStart(2, '0')}.webp`,
)

const steelVaseTrayImages = Array.from(
  { length: 8 },
  (_, index) => `/project-overview/steel-vase-tray-gallery/slide-${String(index + 1).padStart(2, '0')}.webp`,
)

const incenseSetImages = Array.from(
  { length: 5 },
  (_, index) => `/project-overview/incense-set-gallery/slide-${String(index + 1).padStart(2, '0')}.webp`,
)

const cbctScannerImages = Array.from(
  { length: 29 },
  (_, index) => `/project-overview/cbct-gallery/slide-${String(index + 1).padStart(2, '0')}.webp`,
)

const earThermometerImages = Array.from(
  { length: 13 },
  (_, index) => `/project-overview/ear-thermometer-gallery/slide-${String(index + 1).padStart(2, '0')}.webp`,
)

const laserTherapyImages = Array.from(
  { length: 16 },
  (_, index) => `/project-overview/laser-therapy-gallery/slide-${String(index + 1).padStart(2, '0')}.webp`,
)

const fetalMonitorImages = Array.from(
  { length: 12 },
  (_, index) => `/project-overview/fetal-monitor-gallery/slide-${String(index + 1).padStart(2, '0')}.webp`,
)

const bloodAnalyzerImages = Array.from(
  { length: 6 },
  (_, index) => `/project-overview/blood-analyzer-gallery/slide-${String(index + 1).padStart(2, '0')}.webp`,
)

const medicalConsoleImages = Array.from(
  { length: 6 },
  (_, index) => `/project-overview/medical-console-gallery/slide-${String(index + 1).padStart(2, '0')}.webp`,
)

const medicalNebulizerImages = Array.from(
  { length: 4 },
  (_, index) => `/project-overview/medical-nebulizer-gallery/slide-${String(index + 1).padStart(2, '0')}.jpg`,
)

const gamingChairImages = Array.from(
  { length: 8 },
  (_, index) => `/project-overview/gaming-chair-gallery/slide-${String(index + 1).padStart(2, '0')}.webp`,
)

const lotteryMachineImages = Array.from(
  { length: 3 },
  (_, index) => `/project-overview/lottery-machine-gallery/slide-${String(index + 1).padStart(2, '0')}.webp`,
)

const gameControllerImages = Array.from(
  { length: 7 },
  (_, index) => `/project-overview/game-controller-gallery/slide-${String(index + 1).padStart(2, '0')}.webp`,
)

const ultrapureWaterImages = Array.from(
  { length: 8 },
  (_, index) => `/project-overview/ultrapure-water-gallery/slide-${String(index + 1).padStart(2, '0')}.webp`,
)

const runwayInspectorImages = Array.from(
  { length: 6 },
  (_, index) => `/project-overview/runway-inspector-gallery/slide-${String(index + 1).padStart(2, '0')}.webp`,
)

const weatherStationImages = Array.from(
  { length: 9 },
  (_, index) => `/project-overview/weather-station-gallery/slide-${String(index + 1).padStart(2, '0')}.webp`,
)

const smartCollectionRobotImages = Array.from(
  { length: 10 },
  (_, index) => `/project-overview/smart-collection-robot-gallery/slide-${String(index + 1).padStart(2, '0')}.webp`,
)

const categories = [
  { id: 'all', name: '全部项目', en: 'ALL PROJECTS' },
  { id: 'electronics', name: '电子 3C', en: 'CONSUMER ELECTRONICS' },
  { id: 'vaping', name: '电子烟具', en: 'VAPING DEVICES' },
  { id: 'cultural', name: '文创创意', en: 'CULTURAL & CREATIVE' },
  { id: 'medical', name: '医疗设备', en: 'MEDICAL DEVICES' },
  { id: 'gaming', name: '游戏设备', en: 'GAMING PRODUCTS' },
  { id: 'professional', name: '专业设备', en: 'PROFESSIONAL EQUIPMENT' },
]

const projects = [
  { id: 'portable-car-inflator', category: 'electronics', title: '便携式汽车充气泵', en: 'PORTABLE TIRE INFLATOR', cover: '/project-overview/car-inflator.webp', meta: 'PPT · 7 页', body: '当轮胎在途中突然亏气，产品需要让用户快速完成判断与补气。设计将清晰读数、直觉操作和便携收纳融入紧凑机身，为车载应急带来从容可靠的使用体验。', images: carInflatorImages },
  { id: 'outdoor-multifunctional-pump', category: 'electronics', title: '户外多功能充气泵', en: 'OUTDOOR MULTIFUNCTIONAL PUMP', cover: '/project-overview/outdoor-pump.webp', meta: 'PPT · 7 页', body: '从露营充气、夜间照明到户外临时供能，设备需要适应不断变化的使用环境。方案以一体化功能和稳固形态减少装备负担，让户外准备更加轻松高效。', images: outdoorPumpImages },
  { id: 'home-robot-vacuum', category: 'electronics', title: '家用扫地机器人', en: 'ROBOT VACUUM CLEANER', cover: '/project-overview/robot-vacuum.webp', meta: 'PPT · 10 页', body: '它安静地穿行于日常生活的缝隙，在不打扰家人的前提下完成清洁任务。设计围绕路径感知、低矮通过与居家融合展开，让智能清洁自然成为空间的一部分。', images: robotVacuumImages },
  { id: 'herb-grinder', category: 'electronics', title: '磨烟器', en: 'HERB GRINDER', cover: '/project-overview/herb-grinder.jpg', meta: '效果图 · 5 张', body: '这是一件被频繁拿起、旋转与随身携带的小型工具，触感与阻尼直接决定使用品质。设计通过精细纹理、利落分件和可靠结构，在掌心尺度中建立清晰而克制的产品气质。', images: grinderImages },
  { id: 'smart-parking-pressure-gauge', category: 'electronics', title: '智能停车牌气压表', en: 'PARKING PRESSURE GAUGE', cover: '/project-overview/parking-pressure-gauge.webp', meta: 'PPT · 7 页', body: '车辆停下时它是一块清晰的临时停车牌，需要检查胎压时又能立即转化为实用工具。设计将两种高频车载需求收束于统一体量，减少零散物件并提升随车使用效率。', images: parkingGaugeImages },
  { id: 'smart-parking-inflator', category: 'electronics', title: '智能停车牌充气泵', en: 'SMART PARKING INFLATOR', cover: '/project-overview/smart-parking-inflator-gallery/slide-06.webp', meta: 'PPT · 7 页', body: '日常停车与突发补气原本是两段彼此独立的车载体验。方案以模块化结构整合号码展示、状态读取和充气功能，让设备平时融入车内，需要时又能快速进入工作状态。', images: smartParkingInflatorImages },
  { id: 'bluetooth-speaker', category: 'electronics', title: '蓝牙音响', en: 'BLUETOOTH SPEAKER', cover: '/project-overview/bluetooth-speaker-card-cover-clean.png', meta: '效果图 · 5 张', body: '无论放在书桌、床头还是随身带到户外，音响都应以恰到好处的存在感陪伴空间。设计用简洁体块、细腻声孔与直觉按键组织形态，在便携尺寸中传递稳定而轻松的听觉体验。', images: bluetoothSpeakerImages },
  { id: 'smart-pos-terminal', category: 'electronics', title: '智能收银机', en: 'SMART POS TERMINAL', cover: '/project-overview/pos-terminal.webp', meta: '效果图 · 7 张', body: '在客流密集的零售现场，每一次点击、扫码和支付都影响服务节奏。设计以清晰的信息层级、友好的操作角度和整洁走线构建终端，让店员与顾客都能顺畅完成交易。', images: posTerminalImages },
  { id: 'water-quality-tester', category: 'electronics', title: '水质检测仪', en: 'WATER QUALITY TESTER', cover: '/project-overview/water-tester.webp', meta: '效果图 · 4 张', body: '从取样到读取结果，用户需要在短时间内获得明确、可信的检测反馈。方案以稳定握持、醒目显示和便于清洁的结构组织操作流程，让专业检测也能轻松完成。', images: waterTesterImages },

  { id: 'cbd-vape', category: 'vaping', title: 'CBD 电子烟', en: 'CBD VAPING DEVICE', cover: '/project-overview/cbd-vape-gallery/slide-01.webp', meta: '效果图 · 5 张', body: '产品需要在贴近日常的使用方式中，传递轻松、克制且具有辨识度的感受。设计从握持曲线、操作反馈到系列色彩进行整体塑造，形成统一而富有个性的产品家族。', images: cbdVapeImages },
  { id: 'pod-vape', category: 'vaping', title: '换弹电子烟', en: 'POD VAPING DEVICE', cover: '/project-overview/pod-vape-gallery/slide-01.webp', meta: '效果图 · 5 张', body: '换弹动作是产品体验中最直接的交互瞬间，需要明确、顺手并给人可靠反馈。方案围绕弹仓结构、贴合握持和口袋携带优化细节，在小巧体量中建立鲜明识别度。', images: podVapeImages, drawerSide: 'right' },
  { id: 'disposable-cbd-vape', category: 'vaping', title: '一次性 CBD 电子烟', en: 'DISPOSABLE CBD DEVICE', cover: '/project-overview/disposable-cbd-vape-gallery/slide-01.webp', meta: '效果图 · 5 张', body: '面向即取即用的轻量场景，产品既要降低操作负担，也要保持清晰的品牌记忆。设计以柔和轮廓、直觉使用与系列化色彩构建亲和而完整的视觉体验。', images: disposableCbdVapeImages, drawerSide: 'right' },
  { id: 'retro-disposable-vape', category: 'vaping', title: '复古一次性电子烟', en: 'RETRO DISPOSABLE DEVICE', cover: '/project-overview/retro-disposable-vape-gallery/slide-01.webp', meta: '效果图 · 9 张', body: '熟悉的复古意象被重新放入当代便携产品之中，带来兼具情绪与新鲜感的第一印象。方案用经典比例、细节装饰和现代工艺取得平衡，塑造独特而不过度的视觉气质。', images: retroDisposableVapeImages },

  { id: 'stove-flame-cover', category: 'cultural', title: '厨房聚火罩', en: 'KITCHEN FLAME CONCENTRATOR', cover: '/project-overview/stove-flame-cover-gallery/slide-01.webp', meta: '效果图 · 9 张', body: '烹饪时，稳定聚拢的火焰能够提升热量利用，也让锅具受热更加集中。设计从灶具适配、空气流动和放置稳定性出发，将功能结构转化为带有东方细节的厨房器物。', images: stoveFlameCoverImages, drawerSide: 'right' },
  { id: 'steel-vase-tray', category: 'cultural', title: '高端不锈钢花瓶果盘', en: 'STAINLESS STEEL VASE & TRAY', cover: '/project-overview/steel-vase-tray-gallery/slide-01.webp', meta: '效果图 · 8 张', body: '花与果实进入空间后，器皿本身也应成为安静而精致的陈设。方案借助不锈钢的镜面反射、舒展比例与成组关系，在日常桌面上营造轻盈且富有仪式感的景象。', images: steelVaseTrayImages, drawerSide: 'right' },
  { id: 'incense-set', category: 'cultural', title: '古城香篆', en: 'HERITAGE INCENSE SET', cover: '/project-overview/incense-set-gallery/slide-01.webp', meta: '效果图 · 5 张', body: '香气缓慢散开时，器物也成为连接传统记忆与当代生活的媒介。设计提取古城建筑、自然纹样与东方色彩，将香文化凝练成可悬挂、可观赏的现代文创表达。', images: incenseSetImages, drawerSide: 'right' },

  { id: 'cbct-scanner', category: 'medical', title: 'CBCT 口腔扫描仪', en: 'DENTAL CBCT SCANNER', cover: '/project-overview/cbct-card-cover.png', meta: '效果图 · 29 张', body: '患者步入扫描区域时，庞大的专业设备也需要传递清晰与安心。设计围绕医患动线、定位操作和设备尺度重新组织结构，以简洁界面和轻盈体块提升诊疗过程的秩序感。', images: cbctScannerImages, drawerSide: 'right' },
  { id: 'ear-thermometer', category: 'medical', title: '耳温测量仪', en: 'EAR THERMOMETER', cover: '/project-overview/ear-thermometer-card-cover-clean.png', meta: '效果图 · 13 张', body: '面对儿童或身体不适的家人，测温动作需要快速、温和且不增加紧张。方案优化单手握持、读取角度与清洁维护细节，以亲和形态建立家庭医疗产品的可信赖感。', images: earThermometerImages, drawerSide: 'right' },
  { id: 'laser-therapy', category: 'medical', title: '高能量激光治疗仪', en: 'HIGH-ENERGY LASER THERAPY', cover: '/project-overview/laser-therapy-card-cover-clean.png', meta: '效果图 · 16 张', body: '在治疗室内，设备既是医生精确操作的工具，也是患者感知专业程度的第一界面。设计以明确功能分区、稳定姿态和克制细节构建安全、先进且值得信任的医疗设备语言。', images: laserTherapyImages, drawerSide: 'right' },
  { id: 'fetal-monitor', category: 'medical', title: '母胎监护仪', en: 'MATERNAL & FETAL MONITOR', cover: '/project-overview/fetal-monitor-gallery/slide-01.webp', meta: '效果图 · 12 张', body: '监护过程连接着医护人员的专业判断与家庭对新生命的期待。方案以清晰数据读取、灵活移动和柔和形态回应临床节奏，让持续监测更高效，也更具安心感。', images: fetalMonitorImages, drawerSide: 'right' },
  { id: 'blood-analyzer', category: 'medical', title: '血液检测仪', en: 'BLOOD ANALYZER', cover: '/project-overview/blood-analyzer-gallery/slide-01.webp', meta: '效果图 · 6 张', body: '样本进入设备后，清晰连贯的操作路径决定着检验效率与结果可靠性。设计通过舱门、耗材区域和信息界面的系统组织，建立严谨、洁净且易于维护的专业工作站。', images: bloodAnalyzerImages, drawerSide: 'right' },
  { id: 'medical-console', category: 'medical', title: '医疗控制台', en: 'MEDICAL CONTROL CONSOLE', cover: '/project-overview/medical-console-gallery/slide-01.webp', meta: '效果图 · 6 张', body: '在复杂诊疗或影像操作中，医护人员需要始终快速找到关键控制。方案以视线范围、手部触达和功能优先级重组界面载体，让长时间专业操作保持专注与高效。', images: medicalConsoleImages, drawerSide: 'right' },
  { id: 'medical-nebulizer', category: 'medical', title: '医疗雾化器', en: 'MEDICAL NEBULIZER', cover: '/project-overview/medical-nebulizer-gallery/slide-01.jpg', meta: '效果图 · 4 张', body: '治疗往往发生在家庭的日常空间中，产品需要减少陌生感并简化每一次准备。设计以透明可视结构、圆润边界和易拆洗部件回应使用细节，让雾化过程更直观、更安心。', images: medicalNebulizerImages, drawerSide: 'right' },

  { id: 'gaming-chair', category: 'gaming', title: '多功能电竞椅', en: 'MULTIFUNCTIONAL GAMING CHAIR', cover: '/project-overview/gaming-chair-gallery/slide-01.webp', meta: '效果图 · 8 张', body: '从高强度对战到长时间工作，座椅需要跟随身体状态持续提供支撑。设计整合坐姿调节、分区承托和拓展功能，在强烈电竞气质之外保留舒适而有秩序的使用体验。', images: gamingChairImages, drawerSide: 'right' },
  { id: 'lottery-machine', category: 'gaming', title: '立柜式彩票机', en: 'FLOOR-STANDING LOTTERY MACHINE', cover: '/project-overview/lottery-machine-gallery/slide-01.webp', meta: '效果图 · 3 张', body: '在开放的公共娱乐空间里，终端需要远距离吸引注意，并近距离引导用户完成操作。方案通过鲜明轮廓、清晰界面和耐用结构塑造易识别、易维护的立柜设备。', images: lotteryMachineImages, drawerSide: 'right' },
  { id: 'game-controller', category: 'gaming', title: '游戏手柄', en: 'GAME CONTROLLER', cover: '/project-overview/game-controller-gallery/slide-01.webp', meta: '效果图 · 7 张', body: '当游戏进入紧张时刻，双手需要在几乎无意识的状态下准确完成每一次输入。设计从掌心贴合、按键触达与重心分布出发，将操控效率和具有速度感的电竞形态统一起来。', images: gameControllerImages, drawerSide: 'right' },

  { id: 'ultrapure-water-system', category: 'professional', title: '超纯水实验设备', en: 'ULTRAPURE WATER SYSTEM', cover: '/project-overview/ultrapure-water-gallery/slide-01.webp', meta: '效果图 · 8 张', body: '实验人员需要在连续流程中快速确认水质、取用状态与耗材信息。设计以模块化机身、明确交互和洁净表面组织专业功能，让复杂的制水系统呈现出清晰可靠的工作秩序。', images: ultrapureWaterImages, drawerSide: 'right' },
  { id: 'runway-inspector', category: 'professional', title: '机场跑道检测仪', en: 'RUNWAY INSPECTION SYSTEM', cover: '/project-overview/runway-inspector-gallery/slide-01.webp', meta: '效果图 · 6 张', body: '在开阔跑道与复杂天气中，设备必须稳定部署并持续捕捉细微的地面变化。方案围绕户外防护、移动检测和快速维护构建结构，呈现精准、坚固且高度专业的装备形象。', images: runwayInspectorImages, drawerSide: 'right' },
  { id: 'weather-station', category: 'professional', title: '气象仪', en: 'WEATHER STATION', cover: '/project-overview/weather-station-gallery/slide-01.webp', meta: '效果图 · 9 张', body: '设备长期置身风雨与温差之中，安静地将环境变化转化为可用数据。设计整合多类传感器、抗候结构与维护路径，在复杂户外条件下保持可靠监测和清晰识别。', images: weatherStationImages, drawerSide: 'right' },
  { id: 'smart-collection-robot', category: 'professional', title: '智能收集机器人', en: 'SMART COLLECTION ROBOT', cover: '/project-overview/smart-collection-robot-gallery/slide-01.webp', meta: '效果图 · 10 张', body: '机器人在户外或公共空间中自主巡行，识别目标并完成收集与转运。设计将移动底盘、环境感知和收纳机构整合为清晰系统，在提升作业效率的同时传递友好而可靠的智能设备形象。', images: smartCollectionRobotImages, drawerSide: 'right' },
]

const projectIntroDetails = {
  'portable-car-inflator': '设计进一步压缩了充气管线、电源附件和机身之间的收纳距离，并通过高对比界面突出胎压与工作状态。即使在夜间或陌生路况下，用户也能迅速理解设备并完成操作。',
  'outdoor-multifunctional-pump': '不同接口与工作模式被整理为清晰的操作顺序，防滑表面和保护结构则回应户外搬运与落地使用。产品既是一件充气工具，也成为露营装备系统中的可靠节点。',
  'home-robot-vacuum': '机身比例兼顾集尘容量、转向效率与家具底部通行，细节处理尽量弱化机器感。它不需要成为空间的视觉中心，却能用稳定的自动化体验持续减轻家务负担。',
  'herb-grinder': '上下盖的识别、旋转接触面与内部研磨结构被统一考虑，使开合和清理更加直接。金属质感与紧凑比例共同强化耐用印象，也让日常小物拥有值得把玩的细节。',
  'smart-parking-pressure-gauge': '号码模块保持远距离可读，检测端则强调快速连接和单手操作，两种状态之间无需复杂切换。通过功能复用，产品在有限车内空间中获得更高的使用频率。',
  'smart-parking-inflator': '数字显示、充气接口和收纳区域沿操作顺序排布，降低临时使用时的寻找成本。外观在车载环境中保持低调整洁，同时通过局部细节传递工具应有的可靠感。',
  'bluetooth-speaker': '声学开孔与顶部控制区形成清晰秩序，环形轮廓在不同观看角度下都保持完整。材质、灯光与按键反馈共同营造轻松氛围，让播放音乐成为自然发生的日常动作。',
  'smart-pos-terminal': '主屏、顾客显示区和支付模块依据双方视角进行布局，设备底座则兼顾稳定、散热与柜台整理。设计希望缩短学习时间，让复杂商业功能隐藏在简单顺畅的交互之后。',
  'water-quality-tester': '检测探头、样本接触区域与显示界面建立明确方向，避免在潮湿环境中产生误操作。便携外壳同时保护核心器件，使产品能够在家庭、户外与专业巡检之间灵活切换。',
  'cbd-vape': '吸嘴、主体和状态提示被处理为连续整体，减少视觉零碎感，并通过触感变化提示操作位置。不同配色在保持家族一致性的同时，也为用户提供更具情绪差异的选择。',
  'pod-vape': '磁吸或卡扣反馈让弹仓安装状态能够被明确感知，接触区域也便于日常擦拭维护。造型以纵向比例和局部转折建立品牌特征，使产品在同类小型设备中保持辨识度。',
  'disposable-cbd-vape': '结构尽量减少额外学习，拿起、使用与状态感知都在自然动作中完成。色彩与表面工艺承担主要视觉表达，在有限成本和体量下建立轻盈、年轻的产品印象。',
  'retro-disposable-vape': '细节并非对旧物的直接复制，而是将经典装饰、圆角比例与现代分件方式重新组合。熟悉与新颖之间的反差，使一次性产品也拥有更完整的故事感和收藏式视觉记忆。',
  'stove-flame-cover': '环形结构引导热流围绕锅底分布，支撑点与开口则兼顾不同灶具尺寸和空气补给。传统纹样被转译为实际构件，让节能功能与家居审美自然共存。',
  'steel-vase-tray': '花瓶的收口与底部扩张形成挺拔姿态，果盘则以自由曲面营造可组合的桌面层次。镜面与拉丝表面在光线下呈现不同情绪，使器物适配现代住宅、酒店与礼赠场景。',
  'incense-set': '旋转或开合结构让香片放置、气味散发和日常更换都更加直观，垂坠配件则强化动态观赏性。它既服务嗅觉体验，也以随光影变化的形态成为空间中的文化装饰。',
  'cbct-scanner': '扫描臂、患者定位区与医生操作端依据真实诊疗顺序建立关系，并为不同身高与姿态预留调节空间。柔和转角和连续表面减轻大型设备的压迫感，同时保留精密仪器应有的专业度。',
  'ear-thermometer': '探头角度帮助用户自然对准测量位置，屏幕信息则在短暂操作中突出温度与状态判断。底座、保护帽和表面分缝也围绕卫生管理设计，让重复使用更加安心。',
  'laser-therapy': '治疗手具、屏幕和急停控制保持明确层级，移动底座兼顾设备稳定与床边接近能力。冷静色彩和精密分件弱化笨重感，使高能量设备在临床环境中显得克制而可信。',
  'fetal-monitor': '屏幕角度和波形信息适合站立或坐姿快速读取，探头与耗材的收纳也被纳入整体移动路径。柔和色彩减少医疗环境的冰冷感，在效率之外照顾孕产妇的心理感受。',
  'blood-analyzer': '样本放入、检测运行、结果确认与废料处理被串联为单向流程，减少交叉操作。设备以模块边界提示维护区域，让技术人员能够迅速定位部件并保持工作台洁净。',
  'medical-console': '高频按钮被放置在自然触达区，重要状态通过独立显示和明显反馈避免误判。控制台与桌面、显示器及周边设备形成统一工作系统，使多人协作时的信息传递更加顺畅。',
  'medical-nebulizer': '药液容量和雾化状态能够被直接观察，接口方向也方便连接面罩或呼吸管路。圆润小体量减少家庭治疗的压力，拆装逻辑则兼顾照护者的清洗与重复使用需求。',
  'gaming-chair': '靠背、腰托、扶手与腿部支撑围绕不同坐姿建立连续调节范围，让用户在专注、休息和娱乐之间平稳切换。结构感和包覆感共同塑造性能形象，又不过度牺牲日常空间适配性。',
  'lottery-machine': '屏幕高度、票据出口和支付区域按照站立操作顺序排列，灯光与色彩承担远距离导视作用。内部模块保留检修通道和耗材空间，以支持公共场所高频、持续的运营需求。',
  'game-controller': '摇杆、扳机和主按键依据拇指与食指的活动轨迹布置，表面分区为快速定位提供触觉提示。左右握把的曲率兼顾稳定和灵活，使长时间操控仍然保持舒适与准确。',
  'ultrapure-water-system': '取水口、状态屏和耗材维护区按照实验人员的日常动作建立层级，关键数据始终保持可见。整洁立面隐藏复杂管路，使设备能够自然融入高标准实验室环境。',
  'runway-inspector': '传感模块与行走机构保持稳定基准，外壳防护和醒目标识则回应夜间、扬尘及车辆协同作业。数据采集与设备维护被纳入同一系统思考，支持长距离、高强度的持续检测。',
  'weather-station': '各传感单元在避免相互干扰的前提下形成紧凑布局，安装接口适配不同现场条件。外露结构强调排水、抗风和便捷更换，使长期无人值守的监测工作更稳定。',
  'smart-collection-robot': '前端识别、抓取入口和后部收纳沿任务方向形成清晰功能链，底盘则兼顾越障、转向与安全避让。亲和的视觉比例降低机器人进入公共空间的距离感，也便于工作人员理解与维护。',
}

function OverviewLogo() {
  return <a className="overview-logo" href="/" aria-label="返回首页"><span>J</span><span>Z</span><i /></a>
}

export default function ProjectOverviewPage() {
  const initialCategory = window.location.hash.replace('#', '')
  const [activeCategory, setActiveCategory] = useState(categories.some(item => item.id === initialCategory) ? initialCategory : 'all')
  const [selectedProject, setSelectedProject] = useState(null)
  const sidebarRef = useRef(null)
  const active = categories.find(item => item.id === activeCategory) || categories[0]
  const filteredProjects = useMemo(
    () => activeCategory === 'all' ? projects : projects.filter(item => item.category === activeCategory),
    [activeCategory],
  )

  useEffect(() => {
    const cards = [...document.querySelectorAll('.overview-card')]
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => entry.target.classList.toggle('is-visible', entry.isIntersecting))
    }, { threshold: 0.08, rootMargin: '0px 0px -4% 0px' })
    cards.forEach(card => observer.observe(card))
    return () => observer.disconnect()
  }, [activeCategory])

  useEffect(() => {
    const sidebar = sidebarRef.current
    if (!sidebar) return undefined

    let frame = 0
    const updateFloatingSidebar = () => {
      frame = 0
      if (window.innerWidth <= 900) {
        sidebar.removeAttribute('data-follow')
        sidebar.style.removeProperty('--floating-left')
        sidebar.style.removeProperty('--floating-width')
        return
      }

      const inner = sidebar.querySelector('.overview-sidebar-inner')
      if (!inner) return
      const rect = sidebar.getBoundingClientRect()
      const top = 28
      const innerHeight = inner.offsetHeight
      sidebar.style.setProperty('--floating-left', `${rect.left}px`)
      sidebar.style.setProperty('--floating-width', `${rect.width}px`)

      if (rect.top > top) sidebar.dataset.follow = 'start'
      else if (rect.bottom <= top + innerHeight) sidebar.dataset.follow = 'end'
      else sidebar.dataset.follow = 'fixed'
    }
    const scheduleUpdate = () => {
      if (!frame) frame = requestAnimationFrame(updateFloatingSidebar)
    }

    const resizeObserver = new ResizeObserver(scheduleUpdate)
    resizeObserver.observe(sidebar)
    if (sidebar.parentElement) resizeObserver.observe(sidebar.parentElement)
    window.addEventListener('scroll', scheduleUpdate, { passive: true })
    window.addEventListener('resize', scheduleUpdate)
    scheduleUpdate()

    return () => {
      if (frame) cancelAnimationFrame(frame)
      resizeObserver.disconnect()
      window.removeEventListener('scroll', scheduleUpdate)
      window.removeEventListener('resize', scheduleUpdate)
      sidebar.removeAttribute('data-follow')
      sidebar.style.removeProperty('--floating-left')
      sidebar.style.removeProperty('--floating-width')
    }
  }, [])

  useEffect(() => {
    if (!selectedProject) return undefined
    const previousOverflow = document.body.style.overflow
    const closeOnEscape = event => {
      if (event.key === 'Escape') setSelectedProject(null)
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', closeOnEscape)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', closeOnEscape)
    }
  }, [selectedProject])

  const selectCategory = id => {
    setSelectedProject(null)
    setActiveCategory(id)
    const url = id === 'all' ? '/projects' : `/projects#${id}`
    window.history.replaceState(null, '', url)
  }

  return <main className="overview-page" id="top">
    <header className="overview-topbar overview-shell">
      <OverviewLogo />
      <span>JIA ZILIANG / PROJECT ARCHIVE</span>
      <nav>
        <a href="/"><ArrowLeft size={15} />返回首页</a>
        <a href="mailto:1270137399@qq.com">联系我<Mail size={15} /></a>
      </nav>
    </header>

    <section className="overview-hero">
      <div className="overview-hero-media" aria-hidden="true">
        <video autoPlay muted loop playsInline preload="auto" poster="/project-overview/project-archive-hero-poster.jpg">
          <source src="/project-overview/project-archive-hero.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="overview-shell overview-hero-inner">
        <p>SELECTED ARCHIVE · 2019—2026</p>
        <h1><span>项目</span><span>总览</span></h1>
        <div className="overview-hero-foot">
          <strong>从 3C、文创到医疗与专业设备，<br />按真实项目文件包完成分类归档。</strong>
          <dl>
            <div><dt>06</dt><dd>项目类别</dd></div>
            <div><dt>30</dt><dd>项目方案</dd></div>
          </dl>
        </div>
      </div>
    </section>

    <section className="overview-browser">
      <div className="overview-shell overview-layout">
        <aside className="overview-sidebar" aria-label="项目分类导航" ref={sidebarRef}>
          <div className="overview-sidebar-inner">
            <div className="overview-sidebar-title"><span>PROJECT INDEX</span></div>
            <nav>
              {categories.map((category, index) => {
                const count = category.id === 'all' ? projects.length : projects.filter(project => project.category === category.id).length
                return <button
                  type="button"
                  key={category.id}
                  className={activeCategory === category.id ? 'active' : ''}
                  aria-pressed={activeCategory === category.id}
                  onClick={() => selectCategory(category.id)}
                >
                  <i>{String(index).padStart(2, '0')}</i>
                  <span><b>{category.name}</b><small>{category.en}</small></span>
                  <em>{String(count).padStart(2, '0')}</em>
                </button>
              })}
            </nav>
            <a
              className="overview-sidebar-top"
              href="#top"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <span>返回页面顶部</span>
              <ArrowUpRight size={14} />
            </a>
          </div>
        </aside>

        <div className="overview-content" id="project-grid-start">
          <header className="overview-content-head">
            <div><span>{active.en}</span><b>{String(filteredProjects.length).padStart(2, '0')} PROJECTS</b></div>
            <h2>{active.name}</h2>
            <p>{activeCategory === 'all' ? '完整收录源文件包中的 30 个项目，以轻量封面快速浏览。' : `当前展示“${active.name}”分类中的全部项目。`}</p>
          </header>

          <div className="overview-grid" key={activeCategory}>
            {filteredProjects.map((project, index) => {
              const category = categories.find(item => item.id === project.category)
              const hasGallery = Boolean(project.images?.length)
              const openGallery = () => {
                if (hasGallery) setSelectedProject(project)
              }
              return <article
                className={`overview-card ${hasGallery ? 'has-gallery' : ''}`}
                key={`${project.category}-${project.title}`}
                style={{ '--card-order': index % 9 }}
                onClick={openGallery}
                onKeyDown={event => {
                  if (hasGallery && (event.key === 'Enter' || event.key === ' ')) {
                    event.preventDefault()
                    openGallery()
                  }
                }}
                role={hasGallery ? 'button' : undefined}
                tabIndex={hasGallery ? 0 : undefined}
                aria-label={hasGallery ? `查看${project.title}完整效果图` : undefined}
              >
                <figure>
                  <img src={project.cover} alt={`${project.title}项目封面`} loading={index < 6 ? 'eager' : 'lazy'} decoding="async" />
                  <div><span>{String(index + 1).padStart(2, '0')}</span><span>{project.meta}</span></div>
                </figure>
                <div className="overview-card-copy">
                  <div className="overview-card-label"><span>{category.name}</span><i>{project.en}</i></div>
                  <h3>{project.title}</h3>
                  <p>{project.body.split('。')[0]}。</p>
                  {hasGallery && <span className="overview-card-action">点击查看完整效果图 <ArrowUpRight size={15} /></span>}
                </div>
              </article>
            })}
          </div>
        </div>
      </div>
    </section>

    {selectedProject && <div
      className={`overview-gallery-overlay ${selectedProject.drawerSide === 'left' ? 'is-left' : ''}`}
      role="dialog"
      aria-modal="true"
      aria-label={`${selectedProject.title}完整效果图`}
      onMouseDown={event => {
        if (event.target === event.currentTarget) setSelectedProject(null)
      }}
    >
      <aside className="overview-gallery-drawer">
        <header className="overview-gallery-head">
          <div>
            <span>PROJECT GALLERY / {String(selectedProject.images.length).padStart(2, '0')} PAGES</span>
            <h2>{selectedProject.title}</h2>
            <p>{selectedProject.en}</p>
          </div>
          <button type="button" onClick={() => setSelectedProject(null)} aria-label="关闭效果图展示栏"><X size={22} /></button>
        </header>
        <section className="overview-gallery-intro" aria-label={`${selectedProject.title}项目简介`}>
          <div className="overview-gallery-intro-copy">
            <span>PROJECT BRIEF</span>
            <p>{selectedProject.body}{projectIntroDetails[selectedProject.id]}</p>
          </div>
          <dl>
            <div>
              <dt>{categories.find(category => category.id === selectedProject.category)?.name}</dt>
              <dd>项目类别</dd>
            </div>
            <div>
              <dt>{String(selectedProject.images.length).padStart(2, '0')}</dt>
              <dd>效果图数量</dd>
            </div>
          </dl>
        </section>
        <div className="overview-gallery-wall">
          {selectedProject.images.map((src, index) => <figure key={src}>
            <img src={src} alt={`${selectedProject.title}效果图第 ${index + 1} 页`} loading={index === 0 ? 'eager' : 'lazy'} decoding="async" />
            <figcaption>{String(index + 1).padStart(2, '0')} / {String(selectedProject.images.length).padStart(2, '0')}</figcaption>
          </figure>)}
        </div>
      </aside>
    </div>}

    <footer className="overview-footer overview-shell">
      <OverviewLogo />
      <p>© 2026 JIA ZILIANG. ALL RIGHTS RESERVED.</p>
      <a href="#top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>BACK TO TOP <ArrowUpRight size={15} /></a>
    </footer>
  </main>
}
