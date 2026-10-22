/* Sembcorp Leasing Vietnam – landing page logic
   Data source: Sembcorp Development VN e-flyers (North–Bac Ninh, North–Hai Phong, Central, South) */
(function () {
'use strict';

/* ---------------- I18N: UI STRINGS ---------------- */
const T = {
en: {
  nav_lease:"Lease Enquiry",
  hero_title:"Ready-Built Factories & Warehouses for Lease",
  hero_desc:"Modern, move-in ready facilities built to international standards across key industrial clusters in Vietnam.",
  badge_cert:"LOTUS Silver / LEED Certified", badge_space:"Flexible Space Options", badge_support:"Comprehensive On-Site Support",
  stat_projects:"Projects", stat_provinces:"Provinces & cities", stat_regions:"Regions",
  sec_title:"Industrial Portfolio Strategic Clusters",
  sec_subtitle:"Select a cluster or tap a location on the map, then open any project for full specifications",
  tab_bacninh:"Northern Cluster – Bac Ninh", tab_haiphong:"Northern Cluster – Hai Phong", tab_northother:"Northern Cluster – Other",
  tab_central:"Central Cluster", tab_southern:"Southern Cluster",
  map_title:"Vietnam Project Locations", map_hint:"Tap a pin to view projects in that province",
  legend_prov:"Province with projects", legend_city:"Major city",
  tip_projects:"projects", tip_project:"project",
  btn_enquire:"Enquire Now", btn_details:"View Details",
  multi_storey:"Multi-storey", ms_line:"Multi-storey facility · direct truck ramp to upper floor",
  ms_line_ndv:"Multi-storey facility",
  pipeline_head:"Coming soon in this cluster", cs_title:"COMING SOON", cs_sub:"Enquire for Built-to-suit",
  cs_area:"Area", cs_tbc:"To be announced", cs_from:"Flexible units",
  st_leased:"Fully leased", st_ready:"Ready for handover", st_q1:"Handover Q1 2027", st_jan27:"Handover Jan 2027",
  btn_map:"Google Maps", m_plans:"Layout Plans", m_gallery:"Project Images", l_storeys:"Storeys",
  // spec labels
  l_type:"Type", l_nla:"Net Lettable Area (NLA)", l_units:"Unit Sizes", l_office:"Office", l_mezz:"Mezzanine Office", l_annex:"Annex Office",
  l_clear:"Clear Height", l_platform:"Platform Height", l_floor:"Floor Loading", l_loading:"Loading Bays", l_power:"Power Supply",
  l_fire:"Fire Protection", l_ramp:"Vehicle Ramp", l_water:"Water Supply", l_sewer:"Sewerage", l_parking:"Parking", l_blocks:"Blocks", block:"Block",
  l_annexbld:"Annex Building",
  // modal
  m_overview:"Overview", m_location:"Strategic Location", m_industry:"Industry Focus", m_conn:"Connectivity",
  m_specs:"Specifications", m_units:"Unit Schedule", m_unit:"Unit", m_area:"Warehouse / Factory", m_off:"Office",
  m_note:"Specifications are indicative and subject to change; final details are confirmed in the lease agreement. Some images are artist's impressions.",
  m_photo:"Photo", m_plan:"Site plan", m_render:"Artist's impression",
  m_download:"Call hotline",
  f1:"1st Floor", f2:"2nd Floor",
  // footer
  foot_contact_title:"Leasing Enquiry",
  foot_contact_desc:"Connect directly with our Sembcorp industrial leasing team to explore available specs, layout customisation and site visits.",
  foot_hotline_lbl:"Leasing Hotline",
  office_hn_lbl:"Hanoi Office", office_hn_val:"Level 7, Horison Tower, 40 Cat Linh, O Cho Dua Ward, Hanoi",
  office_hcm_lbl:"HCMC Office", office_hcm_val:"Level 20, Friendship Tower, 31 Le Duan, Ben Nghe Ward, Ho Chi Minh City",
  directions:"Get directions", foot_follow:"Follow Sembcorp",
  foot_form_title:"Submit Space Requirement",
  lbl_fullname:"Full Name *", lbl_company:"Company Name *", lbl_email:"Work Email *", lbl_phone:"Phone Number *",
  lbl_project:"Project of Interest *", opt_select:"-- Select a Project --", opt_any:"Not sure yet – please advise",
  lbl_reqs:"Lease Requirements / Area (m²)",
  ph_name:"e.g. John Doe", ph_company:"Your business name", ph_reqs:"Target area, move-in timeline, special specs...",
  consent_a:'By providing the information required in this form and clicking "Submit", you hereby consent to the collection, use, disclosure and/or processing of your personal data by Sembcorp Industries Limited and its affiliates (collectively referred to as "Sembcorp") as specified in the',
  consent_b:", provided always that your personal data will only be collected, used, disclosed and/or processed by Sembcorp for purposes which are reasonably applicable given the circumstances.",
  privacy_link:"Privacy Statement", terms_link:"Terms of Use", terms_a:"I have read and agree to the Sembcorp",
  err_required:"Please complete all required fields (*).", err_email:"Please enter a valid email address.",
  err_consent:"Please tick both boxes (Terms of Use and personal data consent) to submit.",
  err_send:"Sorry, we could not send your enquiry. Please try again or email leasing@sembcorp.com.",
  btn_submit:"Submit Leasing Enquiry", sending:"Sending...",
  success_title:"Thank you for your enquiry",
  success_msg:"A Sembcorp leasing representative will contact you shortly regarding: ",
  foot_copy:"All rights reserved."
},
vi: {
  nav_lease:"Yêu Cầu Thuê",
  hero_title:"Nhà Xưởng & Nhà Kho Xây Sẵn Cho Thuê",
  hero_desc:"Hạ tầng hiện đại, sẵn sàng vận hành, đạt tiêu chuẩn quốc tế tại các cụm công nghiệp trọng điểm của Việt Nam.",
  badge_cert:"Chứng nhận LOTUS Silver / LEED", badge_space:"Diện tích thuê linh hoạt", badge_support:"Hỗ trợ vận hành toàn diện",
  stat_projects:"Dự án", stat_provinces:"Tỉnh & thành phố", stat_regions:"Vùng miền",
  sec_title:"Danh Mục Cụm Công Nghiệp Chiến Lược",
  sec_subtitle:"Chọn cụm hoặc chạm vào vị trí trên bản đồ, sau đó mở từng dự án để xem đầy đủ thông số",
  tab_bacninh:"Cụm Miền Bắc – Bắc Ninh", tab_haiphong:"Cụm Miền Bắc – Hải Phòng", tab_northother:"Cụm Miền Bắc – Khác",
  tab_central:"Cụm Miền Trung", tab_southern:"Cụm Miền Nam",
  map_title:"Vị Trí Dự Án Tại Việt Nam", map_hint:"Chạm vào ghim để xem dự án tại tỉnh/thành đó",
  legend_prov:"Tỉnh/thành có dự án", legend_city:"Thành phố lớn",
  tip_projects:"dự án", tip_project:"dự án",
  btn_enquire:"Gửi Yêu Cầu", btn_details:"Xem Chi Tiết",
  multi_storey:"Nhà nhiều tầng", ms_line:"Nhà xưởng nhiều tầng · đường dốc cho xe tải lên thẳng tầng trên",
  ms_line_ndv:"Nhà xưởng nhiều tầng",
  pipeline_head:"Sắp ra mắt trong cụm", cs_title:"COMING SOON", cs_sub:"Liên hệ giải pháp Built-to-suit",
  cs_area:"Diện tích", cs_tbc:"Sẽ công bố", cs_from:"Diện tích linh hoạt",
  st_leased:"Đã lấp đầy", st_ready:"Sẵn sàng bàn giao", st_q1:"Bàn giao Q1/2027", st_jan27:"Bàn giao T1/2027",
  btn_map:"Google Maps", m_plans:"Mặt bằng bố trí", m_gallery:"Hình ảnh dự án", l_storeys:"Số tầng",
  l_type:"Loại hình", l_nla:"Diện tích cho thuê (NLA)", l_units:"Diện tích mỗi đơn vị", l_office:"Văn phòng", l_mezz:"Văn phòng gác lửng", l_annex:"Văn phòng phụ trợ",
  l_clear:"Chiều cao thông thủy", l_platform:"Chiều cao sàn bốc dỡ", l_floor:"Tải trọng sàn", l_loading:"Cửa bốc dỡ hàng", l_power:"Nguồn điện",
  l_fire:"Phòng cháy chữa cháy", l_ramp:"Đường dốc xe tải", l_water:"Cấp nước", l_sewer:"Thoát nước thải", l_parking:"Bãi đỗ xe", l_blocks:"Khối nhà",
  l_annexbld:"Nhà phụ trợ",
  m_overview:"Tổng quan", m_location:"Vị trí chiến lược", m_industry:"Ngành nghề phù hợp", m_conn:"Kết nối giao thông",
  m_specs:"Thông số kỹ thuật", m_units:"Bảng diện tích đơn vị", m_unit:"Đơn vị", m_area:"Xưởng / Kho", m_off:"Văn phòng",
  m_note:"Thông số mang tính tham khảo và có thể thay đổi; chi tiết cuối cùng được xác nhận trong hợp đồng thuê. Một số hình ảnh là phối cảnh minh họa.",
  m_photo:"Hình ảnh", m_plan:"Mặt bằng", m_render:"Phối cảnh minh họa",
  m_download:"Gọi hotline",
  f1:"Tầng 1", f2:"Tầng 2",
  foot_contact_title:"Liên Hệ Cho Thuê",
  foot_contact_desc:"Liên hệ trực tiếp đội ngũ cho thuê bất động sản công nghiệp Sembcorp để được tư vấn thông số, tùy chỉnh mặt bằng và tham quan thực tế.",
  foot_hotline_lbl:"Hotline Cho Thuê",
  office_hn_lbl:"Văn phòng Hà Nội", office_hn_val:"Tầng 7, Tòa nhà Horison, 40 Cát Linh, Phường Ô Chợ Dừa, Hà Nội",
  office_hcm_lbl:"Văn phòng TP.HCM", office_hcm_val:"Tầng 20, Tòa nhà Friendship, 31 Lê Duẩn, Phường Bến Nghé, TP. Hồ Chí Minh",
  directions:"Chỉ đường", foot_follow:"Theo dõi Sembcorp",
  foot_form_title:"Gửi Yêu Cầu Thuê Xưởng",
  lbl_fullname:"Họ và tên *", lbl_company:"Tên công ty *", lbl_email:"Email doanh nghiệp *", lbl_phone:"Số điện thoại *",
  lbl_project:"Dự án quan tâm *", opt_select:"-- Chọn dự án --", opt_any:"Chưa xác định – cần tư vấn",
  lbl_reqs:"Nhu cầu thuê / Diện tích (m²)",
  ph_name:"VD: Nguyễn Văn A", ph_company:"Tên doanh nghiệp", ph_reqs:"Diện tích mục tiêu, thời gian dự kiến vào, yêu cầu kỹ thuật đặc biệt...",
  consent_a:'Bằng việc cung cấp các thông tin được yêu cầu trong biểu mẫu này và nhấn "Gửi", tôi đồng ý cho Sembcorp Industries Limited và các công ty liên kết (gọi chung là "Sembcorp") thu thập, sử dụng, tiết lộ và/hoặc xử lý dữ liệu cá nhân của tôi theo',
  consent_b:", với điều kiện dữ liệu cá nhân của tôi chỉ được Sembcorp thu thập, sử dụng, tiết lộ và/hoặc xử lý cho các mục đích hợp lý trong từng trường hợp cụ thể.",
  privacy_link:"Tuyên bố Quyền riêng tư (Privacy Statement)", terms_link:"Điều khoản Sử dụng (Terms of Use)", terms_a:"Tôi đã đọc và đồng ý với",
  err_required:"Vui lòng điền đầy đủ các trường bắt buộc (*).", err_email:"Vui lòng nhập địa chỉ email hợp lệ.",
  err_consent:"Vui lòng tích chọn cả hai ô (Điều khoản Sử dụng và đồng ý xử lý dữ liệu cá nhân) để gửi yêu cầu.",
  err_send:"Rất tiếc, chưa gửi được yêu cầu. Vui lòng thử lại hoặc email leasing@sembcorp.com.",
  btn_submit:"Gửi Yêu Cầu Thuê", sending:"Đang gửi...",
  success_title:"Cảm ơn Quý khách đã gửi yêu cầu",
  success_msg:"Đội ngũ tư vấn Sembcorp sẽ liên hệ lại trong thời gian sớm nhất về: ",
  foot_copy:"Bảo lưu mọi quyền."
},
zh: {
  nav_lease:"租赁咨询",
  hero_title:"标准厂房与仓库招租",
  hero_desc:"位于越南核心工业集群、符合国际标准的现代化即用型工业设施。",
  badge_cert:"LOTUS 银级 / LEED 绿色认证", badge_space:"灵活的租赁面积", badge_support:"全方位园区运营支持",
  stat_projects:"个项目", stat_provinces:"个省市", stat_regions:"大区域",
  sec_title:"战略工业园区组合",
  sec_subtitle:"选择集群或点击地图上的位置，再打开项目查看完整规格",
  tab_bacninh:"北部集群 – 北宁", tab_haiphong:"北部集群 – 海防", tab_northother:"北部集群 – 其他",
  tab_central:"中部集群", tab_southern:"南部集群",
  map_title:"越南项目分布图", map_hint:"点击标记查看该省市的项目",
  legend_prov:"有项目的省市", legend_city:"主要城市",
  tip_projects:"个项目", tip_project:"个项目",
  btn_enquire:"立即咨询", btn_details:"查看详情",
  multi_storey:"多层厂房", ms_line:"多层设施 · 货车坡道直达楼上",
  ms_line_ndv:"多层设施",
  pipeline_head:"本集群即将推出", cs_title:"COMING SOON", cs_sub:"欢迎咨询定制建造 (Built-to-suit)",
  cs_area:"面积", cs_tbc:"待公布", cs_from:"灵活单元",
  st_leased:"已满租", st_ready:"可即时交付", st_q1:"2027年第一季度交付", st_jan27:"2027年1月交付",
  btn_map:"谷歌地图", m_plans:"平面布局图", m_gallery:"项目图片", l_storeys:"层数",
  l_type:"类型", l_nla:"可租面积 (NLA)", l_units:"单元面积", l_office:"办公区", l_mezz:"夹层办公室", l_annex:"附属办公室",
  l_clear:"净高", l_platform:"卸货平台高度", l_floor:"地面荷载", l_loading:"装卸位", l_power:"供电容量",
  l_fire:"消防系统", l_ramp:"车辆坡道", l_water:"供水", l_sewer:"排污", l_parking:"停车位", l_blocks:"楼栋", block:"楼栋",
  l_annexbld:"附属楼",
  m_overview:"概览", m_location:"战略区位", m_industry:"适用行业", m_conn:"交通连接",
  m_specs:"技术规格", m_units:"单元面积表", m_unit:"单元", m_area:"厂房 / 仓库", m_off:"办公",
  m_note:"规格仅供参考，如有变更恕不另行通知；最终以租赁合同为准。部分图片为效果图。",
  m_photo:"实景", m_plan:"总平面图", m_render:"效果图",
  m_download:"拨打热线",
  f1:"一楼", f2:"二楼",
  foot_contact_title:"招商租赁咨询",
  foot_contact_desc:"直接联系胜科工业租赁团队，了解可租规格、定制布局并安排实地考察。",
  foot_hotline_lbl:"租赁热线",
  office_hn_lbl:"河内办公室", office_hn_val:"河内市乌渚娃坊吉灵路40号 Horison 大厦7楼",
  office_hcm_lbl:"胡志明市办公室", office_hcm_val:"胡志明市边义坊黎笋路31号 Friendship 大厦20楼",
  directions:"查看路线", foot_follow:"关注胜科",
  foot_form_title:"提交您的租赁需求",
  lbl_fullname:"姓名 *", lbl_company:"公司名称 *", lbl_email:"工作邮箱 *", lbl_phone:"联系电话 *",
  lbl_project:"意向项目 *", opt_select:"-- 请选择项目 --", opt_any:"尚未确定 – 请推荐",
  lbl_reqs:"租赁需求 / 意向面积 (m²)",
  ph_name:"例如：张伟", ph_company:"贵公司名称", ph_reqs:"目标面积、预计入驻时间、特殊规格要求……",
  consent_a:'提供本表格所需信息并点击“提交”，即表示本人同意胜科工业有限公司 (Sembcorp Industries Limited) 及其关联公司（统称“胜科”）按照',
  consent_b:"的规定收集、使用、披露及/或处理本人的个人数据，前提是胜科仅为在相关情况下合理适用的目的收集、使用、披露及/或处理本人的个人数据。",
  privacy_link:"隐私声明 (Privacy Statement)", terms_link:"使用条款 (Terms of Use)", terms_a:"本人已阅读并同意胜科",
  err_required:"请填写所有必填项 (*)。", err_email:"请输入有效的电子邮箱。",
  err_consent:"请勾选两个同意框（使用条款及个人数据同意）后再提交。",
  err_send:"抱歉，提交未成功。请重试或发送邮件至 leasing@sembcorp.com。",
  btn_submit:"提交租赁意向", sending:"提交中……",
  success_title:"感谢您的咨询",
  success_msg:"胜科租赁代表将尽快就以下项目与您联系：",
  foot_copy:"版权所有。"
}};

/* value tokens used inside spec data */
const V = {
  en:{u:"unit", fl2:"2 floors", blocks:"Blocks", block:"Block", incl:"incl. office", rbh:"Ready-Built Hybrid (RBH)", rbf:"Ready-Built Factory (RBF)", single:"Single storey", multi:"multi-storey with ramp",
      fire:"Fire & smoke detectors, sprinklers, exhaust fans", ramp:"Direct truck access & dock-high loading on both floors",
      water:"Supplied from VSIP distribution network", sewer:"Septic tanks & wastewater treatment plant",
      dock:"dock levellers", per:"per unit", lots:"lots", xdock:"cross-docking area", mezz:"mezzanine office", annex:"annex building / mezzanine office",
      incl_mezz:"can include 3,000 m² mezzanine office"},
  vi:{u:"đơn vị", fl2:"2 tầng", blocks:"Khối", block:"Khối", incl:"gồm văn phòng", rbh:"Xưởng/kho xây sẵn kết hợp (RBH)", rbf:"Nhà xưởng xây sẵn (RBF)", single:"một tầng", multi:"nhiều tầng, có đường dốc",
      fire:"Đầu báo khói & nhiệt, sprinkler, quạt hút khói", ramp:"Xe tải tiếp cận trực tiếp & sàn bốc dỡ ở cả hai tầng",
      water:"Cấp từ mạng lưới phân phối VSIP", sewer:"Bể tự hoại & trạm xử lý nước thải",
      dock:"sàn nâng thủy lực", per:"mỗi đơn vị", lots:"chỗ", xdock:"khu cross-docking", mezz:"văn phòng gác lửng", annex:"nhà phụ trợ / văn phòng gác lửng",
      incl_mezz:"có thể gồm 3.000 m² văn phòng gác lửng"},
  zh:{u:"单元", fl2:"两层", blocks:"楼栋", block:"楼栋", incl:"含办公区", rbh:"标准厂房仓库混合型 (RBH)", rbf:"标准厂房 (RBF)", single:"单层", multi:"多层，配坡道",
      fire:"烟感及温感探测器、喷淋系统、排烟风机", ramp:"货车直达，两层均设高台装卸",
      water:"由 VSIP 供水管网供应", sewer:"化粪池及污水处理站",
      dock:"液压升降平台", per:"每单元", lots:"个车位", xdock:"越库作业区", mezz:"夹层办公室", annex:"附属楼 / 夹层办公室",
      incl_mezz:"可含 3,000 m² 夹层办公室"}
};

/* ---------------- LOCATIONS (map) ----------------
   Pin coordinates follow the SIS & SIH map artwork (same artboard as the e-flyer covers). */
const PROVINCES = {
  'bac-ninh':   {x:348,   y:189, en:"Bac Ninh", vi:"Bắc Ninh", zh:"北宁", cluster:'bac-ninh'},
  'hai-phong':  {x:362.5, y:212, en:"Hai Phong", vi:"Hải Phòng", zh:"海防", cluster:'hai-phong'},
  'hung-yen':   {x:343.5, y:217, en:"Hung Yen", vi:"Hưng Yên", zh:"兴安", cluster:'northern-other'},
  'ninh-binh':  {x:339.5, y:242, en:"Ninh Binh", vi:"Ninh Bình", zh:"宁平", cluster:'northern-other'},
  'nghe-an':    {x:315.5, y:306, en:"Nghe An", vi:"Nghệ An", zh:"乂安", cluster:'central'},
  'quang-ngai': {x:461.5, y:483, en:"Quang Ngai", vi:"Quảng Ngãi", zh:"广义", cluster:'central'},
  'dong-nai':   {x:409,   y:643, en:"Dong Nai", vi:"Đồng Nai", zh:"同奈", cluster:'southern'},
  'hcmc':       {x:369,   y:661, en:"Ho Chi Minh City", vi:"TP. Hồ Chí Minh", zh:"胡志明市", cluster:'southern'}
};
const CITIES = [
  {x:329.5,y:205.5,label:{en:"Ha Noi",vi:"Hà Nội",zh:"河内"},side:'left'},
  {x:441.5,y:434.5,label:{en:"Da Nang",vi:"Đà Nẵng",zh:"岘港"},side:'left'},
  {x:371.5,y:677.5,label:{en:"Ho Chi Minh City",vi:"TP. Hồ Chí Minh",zh:"胡志明市"},side:'left'}
];

const CLUSTERS = [
  {id:'bac-ninh', tab:'tab_bacninh'},
  {id:'hai-phong', tab:'tab_haiphong'},
  {id:'northern-other', tab:'tab_northother'},
  {id:'central', tab:'tab_central'},
  {id:'southern', tab:'tab_southern'}
];

/* ---------------- CLUSTER / AREA NARRATIVES (from flyers) ---------------- */
const OVERVIEW = {
  bacninh:{
    en:{loc:"Strategically located in Bac Ninh's leading electronics manufacturing hub, with direct access to Hanoi CBD and key transport gateways – Noi Bai International Airport in 30 minutes and Hai Phong Port in 90 minutes. This connectivity supports just-in-time operations and efficient distribution across Northern Vietnam.",
        ind:"Designed for electronics, semiconductors, precision engineering and high-value manufacturing, anchored within a mature ecosystem of global technology leaders and Tier-1 suppliers. Modern Ready-Built Facilities with reliable infrastructure and flexible layouts enable fast setup, operational efficiency and scalability."},
    vi:{loc:"Tọa lạc tại trung tâm sản xuất điện tử hàng đầu của Bắc Ninh, kết nối trực tiếp với trung tâm Hà Nội và các cửa ngõ giao thông chính – 30 phút đến Sân bay Quốc tế Nội Bài và 90 phút đến Cảng Hải Phòng. Khả năng kết nối này hỗ trợ vận hành just-in-time và phân phối hiệu quả khắp miền Bắc.",
        ind:"Phù hợp cho điện tử, bán dẫn, cơ khí chính xác và sản xuất giá trị cao, nằm trong hệ sinh thái trưởng thành của các tập đoàn công nghệ toàn cầu và nhà cung cấp Tier-1. Nhà xưởng xây sẵn hiện đại, hạ tầng tin cậy và mặt bằng linh hoạt giúp doanh nghiệp triển khai nhanh, vận hành hiệu quả và dễ dàng mở rộng."},
    zh:{loc:"位于北宁领先的电子制造中心，直达河内中央商务区及主要交通枢纽——30分钟可达内排国际机场，90分钟可达海防港，支持准时化生产及覆盖越南北部的高效分销。",
        ind:"专为电子、半导体、精密工程及高附加值制造业打造，依托全球科技龙头与一级供应商构成的成熟产业生态。现代化标准厂房基础设施可靠、布局灵活，助力企业快速投产、高效运营并灵活扩张。"},
    conn:[['fa-plane',{en:"Noi Bai Int'l Airport",vi:"Sân bay Nội Bài",zh:"内排国际机场"},'~30 min'],['fa-anchor',{en:"Hai Phong Port",vi:"Cảng Hải Phòng",zh:"海防港"},'~90 min'],['fa-city',{en:"Hanoi CBD",vi:"Trung tâm Hà Nội",zh:"河内市中心"},{en:"Direct access",vi:"Kết nối trực tiếp",zh:"直达"}]]
  },
  haiphong:{
    en:{loc:"Located in Vietnam's northern growth corridor, the Hai Phong Cluster is the country's key logistics gateway, anchored by Lach Huyen Deep-Sea Port – the only port in Northern Vietnam able to handle large mother vessels for direct shipping to the U.S. and Europe. Positioned within the Dinh Vu – Cat Hai Economic Zone and connected via the Hanoi–Hai Phong Expressway, it offers efficient access to Hanoi and strong connectivity to China and Northeast Asia.",
        ind:"Supports electronics manufacturing, precision engineering, automotive components and modern logistics, serving higher-value, export-oriented industries within a well-established supply-chain ecosystem. Designed for port-centric logistics and fast-turnaround operations, enabling rapid setup and speed-to-market with flexible spaces and comprehensive on-site support."},
    vi:{loc:"Nằm trên hành lang tăng trưởng phía Bắc, Cụm Hải Phòng là cửa ngõ logistics trọng điểm của cả nước, gắn với Cảng nước sâu Lạch Huyện – cảng duy nhất ở miền Bắc tiếp nhận tàu mẹ cỡ lớn đi thẳng Mỹ và châu Âu. Thuộc Khu kinh tế Đình Vũ – Cát Hải, kết nối qua cao tốc Hà Nội – Hải Phòng, thuận tiện đến Hà Nội và kết nối mạnh với Trung Quốc, Đông Bắc Á.",
        ind:"Phù hợp cho sản xuất điện tử, cơ khí chính xác, linh kiện ô tô và logistics hiện đại, phục vụ các ngành giá trị cao, định hướng xuất khẩu trong hệ sinh thái chuỗi cung ứng hoàn chỉnh. Thiết kế cho logistics gắn với cảng và vận hành quay vòng nhanh, giúp doanh nghiệp triển khai nhanh với diện tích linh hoạt và hỗ trợ tại chỗ toàn diện."},
    zh:{loc:"海防集群位于越南北部增长走廊，是全国重要的物流门户，依托越南北部唯一可停靠大型母船、直航美国和欧洲的拉县深水港。集群位于亭武–吉海经济区，经河内–海防高速公路高效连接河内，并与中国及东北亚紧密相连。",
        ind:"适用于电子制造、精密工程、汽车零部件及现代物流，服务于成熟供应链生态中的高附加值、出口导向型产业。专为港口物流与快速周转运营设计，提供灵活空间与全面现场支持，助力企业快速投产、抢占市场。"},
    conn:[['fa-ship',{en:"Lach Huyen Deep-Sea Port",vi:"Cảng nước sâu Lạch Huyện",zh:"拉县深水港"},{en:"Mother-vessel gateway",vi:"Tiếp nhận tàu mẹ",zh:"可停靠母船"}],['fa-anchor',{en:"Hai Phong Port",vi:"Cảng Hải Phòng",zh:"海防港"},{en:"Nearby",vi:"Lân cận",zh:"邻近"}],['fa-plane',{en:"Cat Bi Airport",vi:"Sân bay Cát Bi",zh:"吉碑机场"},{en:"Nearby",vi:"Lân cận",zh:"邻近"}],['fa-road',{en:"Hanoi – Hai Phong Expwy",vi:"Cao tốc Hà Nội – Hải Phòng",zh:"河内–海防高速"},{en:"Direct link",vi:"Kết nối trực tiếp",zh:"直连"}]]
  },
  ngheAn:{
    en:{loc:"Located within VSIP Nghe An in the Dong Nam Economic Zone, SIS Nghe An offers direct access to Vinh Airport and Cua Lo Port, with excellent connectivity to Vinh City and major highways. Its position near Northern Vietnam's logistics corridors makes it ideal for regional distribution.",
        ind:"Suited for general manufacturing, logistics and cost-sensitive industries, offering attractive tax incentives and competitive labour costs in a growing industrial region."},
    vi:{loc:"Nằm trong VSIP Nghệ An thuộc Khu kinh tế Đông Nam, SIS Nghệ An kết nối trực tiếp Sân bay Vinh và Cảng Cửa Lò, thuận tiện đến TP. Vinh và các trục quốc lộ chính. Vị trí gần các hành lang logistics phía Bắc lý tưởng cho phân phối khu vực.",
        ind:"Phù hợp cho sản xuất tổng hợp, logistics và các ngành nhạy cảm về chi phí, với ưu đãi thuế hấp dẫn và chi phí nhân công cạnh tranh tại vùng công nghiệp đang tăng trưởng."},
    zh:{loc:"SIS 乂安位于东南经济区内的 VSIP 乂安，直达荣市机场与炉门港，与荣市及主要公路连接便利，邻近越南北部物流走廊，是区域分销的理想选址。",
        ind:"适用于一般制造、物流及成本敏感型行业，享有优厚税收优惠及具竞争力的劳动力成本，地处快速发展的工业区。"},
    conn:[['fa-city',{en:"Vinh City",vi:"TP. Vinh",zh:"荣市"},'5 km'],['fa-plane',{en:"Vinh Airport",vi:"Sân bay Vinh",zh:"荣市机场"},'9 km'],['fa-anchor',{en:"Cua Lo Port",vi:"Cảng Cửa Lò",zh:"炉门港"},'12.5 km'],['fa-road',{en:"Highway access",vi:"Kết nối cao tốc",zh:"高速公路"},'CT01 · NR 1A']]
  },
  quangNgai:{
    en:{loc:"Situated in VSIP Quang Ngai, strategically positioned in Central Vietnam with direct access to Chu Lai Airport, Sa Ky Port and Dung Quat Seaport. Its location supports fast access to Quang Ngai City and Da Nang via national highways.",
        ind:"Ideal for automotive, electronics, light manufacturing and F&B, providing scalable solutions within a secure and well-supported industrial ecosystem."},
    vi:{loc:"Nằm trong VSIP Quảng Ngãi, vị trí chiến lược tại miền Trung, kết nối trực tiếp Sân bay Chu Lai, Cảng Sa Kỳ và Cảng biển Dung Quất; thuận tiện đến TP. Quảng Ngãi và Đà Nẵng qua các tuyến quốc lộ.",
        ind:"Lý tưởng cho ô tô, điện tử, sản xuất nhẹ và thực phẩm – đồ uống, với giải pháp linh hoạt mở rộng trong hệ sinh thái công nghiệp an toàn, được hỗ trợ tốt."},
    zh:{loc:"位于 VSIP 广义，地处越南中部战略要地，直达朱莱机场、沙岐港及榕橘深水港，经国道快速通达广义市及岘港。",
        ind:"适用于汽车、电子、轻工制造及食品饮料行业，在安全且配套完善的工业生态中提供可扩展的解决方案。"},
    conn:[['fa-city',{en:"Quang Ngai City",vi:"TP. Quảng Ngãi",zh:"广义市"},'12 km'],['fa-anchor',{en:"Sa Ky Port",vi:"Cảng Sa Kỳ",zh:"沙岐港"},'18 km'],['fa-ship',{en:"Dung Quat Seaport",vi:"Cảng Dung Quất",zh:"榕橘港"},'27 km'],['fa-plane',{en:"Chu Lai Airport",vi:"Sân bay Chu Lai",zh:"朱莱机场"},'32 km'],['fa-city',{en:"Da Nang City",vi:"TP. Đà Nẵng",zh:"岘港市"},'140 km'],['fa-road',{en:"Highway access",vi:"Kết nối cao tốc",zh:"高速公路"},'CT01 · NR 1A']]
  },
  vsip3:{
    en:{loc:"SIH @ VSIP III Binh Duong sits at the centre of Vietnam's fastest-growing industrial area. With world-class infrastructure and direct connectivity to Ho Chi Minh City, international airports and deep-sea ports, it provides an ideal base for businesses seeking scale and regional access in Southeast Asia.",
        ind:"Ready-built facilities enable rapid setup and meet international standards with sustainability certifications. Caters to high-tech, automotive, electronics, logistics and export-driven industries, offering flexible spaces and comprehensive on-site support."},
    vi:{loc:"SIH @ VSIP III Bình Dương nằm tại trung tâm vùng công nghiệp tăng trưởng nhanh nhất Việt Nam. Hạ tầng đẳng cấp quốc tế, kết nối trực tiếp TP. Hồ Chí Minh, các sân bay quốc tế và cảng nước sâu – nền tảng lý tưởng cho doanh nghiệp cần quy mô và khả năng tiếp cận khu vực Đông Nam Á.",
        ind:"Nhà xưởng xây sẵn giúp triển khai nhanh, đạt chuẩn quốc tế và chứng nhận bền vững. Phù hợp cho công nghệ cao, ô tô, điện tử, logistics và các ngành định hướng xuất khẩu, với diện tích linh hoạt và hỗ trợ tại chỗ toàn diện."},
    zh:{loc:"SIH @ VSIP III 平阳位于越南增长最快的工业区中心，拥有世界级基础设施，直连胡志明市、国际机场及深水港，是寻求规模化发展与东南亚区域布局企业的理想基地。",
        ind:"标准厂房可快速投产，符合国际标准并获可持续认证。适用于高科技、汽车、电子、物流及出口导向型产业，提供灵活空间与全面现场支持。"},
    conn:[['fa-plane',{en:"Tan Son Nhat Int'l Airport",vi:"Sân bay Tân Sơn Nhất",zh:"新山一国际机场"},'~45 km'],['fa-city',{en:"HCMC city centre",vi:"Trung tâm TP.HCM",zh:"胡志明市中心"},'~48 km'],['fa-anchor',{en:"Cat Lai Port",vi:"Cảng Cát Lái",zh:"吉莱港"},'~57 km'],['fa-plane-arrival',{en:"Long Thanh Int'l Airport",vi:"Sân bay Long Thành",zh:"隆城国际机场"},'~70 km'],['fa-ship',{en:"Cai Mep Deep-Sea Port",vi:"Cảng nước sâu Cái Mép",zh:"盖梅深水港"},'~85 km']]
  }
};

/* ---------------- PROJECTS ----------------
   specs: {cols:[label keys], rows:[[labelKey, [values per col]]]}
   values may contain {token} replaced with V[lang].token  */
const SAME = (v,n) => Array(n).fill(v);
const MAP = {
  yp2a:'https://maps.app.goo.gl/QQbP9y2w1sBJ8vsDA', dv3:'https://maps.app.goo.gl/cFccK4jw76QKGRXp8',
  mq:'https://maps.app.goo.gl/d6Z6xdNDPYysRMeY7', pd:'https://maps.app.goo.gl/zbbtbyG2YkVS927K7',
  vsip3:'https://maps.app.goo.gl/dFoB5pTpJkAfmHeR8', qn:'https://maps.app.goo.gl/KLNA95n6PWsHm9R76',
  hp:'https://maps.app.goo.gl/2w3WZJk2cxrqqHRcA', na:'https://maps.app.goo.gl/feQqLDvKGJJhMsU69',
  tn:'https://maps.app.goo.gl/3jT1pmAicBZ6mAcf6'
};
const PROJECTS = [
/* ===== BAC NINH ===== */
{ id:'sih1-yp2a', name:"Sembcorp Integrated Hub 1 @ Yen Phong II-A", short:"SIH 1 @ Yen Phong II-A", prov:'bac-ninh', cluster:'bac-ninh', multi:true, status:'st_q1', map:MAP.yp2a,
  loc:{en:"Yen Phong II-A Industrial Park, Bac Ninh",vi:"KCN Yên Phong II-A, Bắc Ninh",zh:"北宁省安丰 II-A 工业园"},
  tag:{en:"Two-storey ready-built hybrid hub in Bac Ninh's electronics ecosystem.",vi:"Kho xưởng kết hợp 2 tầng xây sẵn trong hệ sinh thái điện tử Bắc Ninh.",zh:"位于北宁电子产业生态圈的两层标准厂房仓库。"},
  cardImg:'yp1-d', overview:'bacninh',
  key:[['l_nla',"60,000 m² ({fl2})"],['l_units',"~2,300 – 3,600 m²"],['l_clear',"9 m / 7 m"],['l_floor',"3 / 2 t/m²"]],
  gallery:[['yp1-d','render'],['yp1-hero','render'],['yp1-a','render'],['yp1-b','render'],['yp1-c','render']],
  plans:[['yp1-plan1','f1'],['yp1-plan2','f2']],
  specs:{cols:['f1','f2'], rows:[
    ['l_type',["{rbh}","{rbf}"]],
    ['l_nla',["~31,000 m²","~28,000 m²"]],
    ['l_units',["~2,500 m²+","~2,300 m²+"]],
    ['l_office',["~277 m²+ ({mezz})","~200 m²+ ({annex})"]],
    ['l_clear',["9 m","7 m"]],
    ['l_platform',["1.3 m","0.3 m"]],
    ['l_floor',["3 t/m²","2 t/m²"]],
    ['l_loading',["3–4 / {u}, 2–3 {dock}","2–3 / {u}"]],
    ['l_power',["143–242 kVA / {u}","243–330 kVA / {u}"]],
    ['l_fire',SAME("{fire}",2)],
    ['l_ramp',SAME("{ramp}",2)]
  ]},
  units:[
    {t:'f1', blocks:[['Block 1',[['U1.1',2514,277],['U1.2',2920,283],['U1.3',2916,283],['U1.4',2917,278],['U1.5',3190,291]]],
                     ['Block 2',[['U2.1',2627,277],['U2.2',2922,283],['U2.3',2904,285],['U2.4',2902,279],['U2.5',3303,292]]]]},
    {t:'f2', blocks:[['Block 3',[['U3.1',2363,208],['U3.2',2749,226],['U3.3',2095,200],['U3.4',3579,295],['U3.5',2842,234]]],
                     ['Block 4',[['U4.1',3074,254],['U4.2',3092,243]]],
                     ['Block 5',[['U5.1',3222,265],['U5.2',2887,255]]]]}
  ]},
{ id:'sih2-yp2a', name:"Sembcorp Integrated Hub 2 @ Yen Phong II-A", short:"SIH 2 @ Yen Phong II-A", prov:'bac-ninh', cluster:'bac-ninh', multi:true, map:MAP.yp2a,
  loc:{en:"Yen Phong II-A Industrial Park, Bac Ninh",vi:"KCN Yên Phong II-A, Bắc Ninh",zh:"北宁省安丰 II-A 工业园"},
  tag:{en:"Larger-format two-storey hub with ~70,000 m² across both floors.",vi:"Trung tâm 2 tầng quy mô lớn, tổng ~70.000 m² trên hai tầng.",zh:"更大规模的两层厂房，两层合计约 70,000 m²。"},
  cardImg:'yp2-hero', overview:'bacninh',
  key:[['l_nla',"~70,000 m² ({fl2})"],['l_units',"~2,400 – 3,400 m²"],['l_clear',"9 m / 7 m"],['l_floor',"3 / 2 t/m²"]],
  gallery:[['yp2-hero','render']],
  plans:[['yp2-plan1','f1'],['yp2-plan2','f2']],
  specs:{cols:['f1','f2'], rows:[
    ['l_type',["{rbh}","{rbf}"]],
    ['l_nla',["~36,000 m²","~34,000 m²"]],
    ['l_units',["~3,200 m²+","~2,400 m²+"]],
    ['l_office',["~236 m²+ ({mezz})","~230 m²+ ({annex})"]],
    ['l_clear',["9 m","7 m"]],
    ['l_platform',["1.3 m","0.3 m"]],
    ['l_floor',["3 t/m²","2 t/m²"]],
    ['l_loading',["3–4 / {u}, 2–3 {dock}","2–3 / {u}"]],
    ['l_power',["143–242 kVA / {u}","243–330 kVA / {u}"]],
    ['l_fire',SAME("{fire}",2)],
    ['l_ramp',SAME("{ramp}",2)]
  ]},
  units:[
    {t:'f1', blocks:[['Block 1',[['U1.1',3350,236],['U1.2',3406,236],['U1.3',3404,237],['U1.4',3389,236],['U1.5',3331,237]]],
                     ['Block 2',[['U2.1',3237,240],['U2.2',3424,237],['U2.3',3436,236],['U2.4',3424,237],['U2.5',3242,239]]]]},
    {t:'f2', blocks:[['Block 3',[['U3.1',3216,293],['U3.2',2530,245],['U3.3',2538,249]]],
                     ['Block 4',[['U4.1',2537,245],['U4.2',2546,250],['U4.3',2416,232]]],
                     ['Block 5',[['U5.1',3063,292],['U5.2',2995,274],['U5.3',2998,276],['U5.4',2994,275],['U5.5',3159,294]]]]}
  ]},
{ id:'sih-hoaphu', pipeline:true, name:"Sembcorp Integrated Hub @ Hoa Phu", short:"SIH @ Hoa Phu", prov:'bac-ninh', cluster:'bac-ninh', area:null,
  loc:{en:"Hoa Phu, Bac Ninh",vi:"Hòa Phú, Bắc Ninh",zh:"北宁省和富"},
  tag:{en:"A strategic location for future growth.",vi:"Vị trí chiến lược cho tăng trưởng tương lai.",zh:"面向未来增长的战略选址。"}},
{ id:'sih-nshl', pipeline:true, name:"Sembcorp Integrated Hub @ Nam Son Hap Linh", short:"SIH @ Nam Son Hap Linh", prov:'bac-ninh', cluster:'bac-ninh', area:"2,300 m²+",
  loc:{en:"Nam Son – Hap Linh Industrial Park, Bac Ninh",vi:"KCN Nam Sơn – Hạp Lĩnh, Bắc Ninh",zh:"北宁省南山–合岭工业园"},
  tag:{en:"Expanding industrial opportunities.",vi:"Mở rộng cơ hội công nghiệp.",zh:"拓展工业发展机遇。"}},
{ id:'sih-vsip2bn', pipeline:true, name:"Sembcorp Integrated Hub @ VSIP II Bac Ninh", short:"SIH @ VSIP II Bac Ninh", prov:'bac-ninh', cluster:'bac-ninh', area:null,
  loc:{en:"VSIP II Bac Ninh",vi:"VSIP II Bắc Ninh",zh:"VSIP II 北宁"},
  tag:{en:"Part of a connected industrial ecosystem.",vi:"Một phần của hệ sinh thái công nghiệp kết nối.",zh:"互联工业生态的一部分。"}},

/* ===== HAI PHONG ===== */
{ id:'sis-hp', name:"Sembcorp Logistics Park Hai Phong", short:"SIS Hai Phong", prov:'hai-phong', cluster:'hai-phong', status:'st_leased', map:MAP.hp,
  loc:{en:"VSIP Hai Phong, Dinh Vu – Cat Hai EZ, Hai Phong",vi:"VSIP Hải Phòng, KKT Đình Vũ – Cát Hải, Hải Phòng",zh:"海防市亭武–吉海经济区 VSIP 海防"},
  tag:{en:"Single-storey hybrid space from 1,700 m², close to the port gateway.",vi:"Xưởng/kho kết hợp một tầng từ 1.700 m², gần cửa ngõ cảng biển.",zh:"单层混合型空间，1,700 m² 起，毗邻港口门户。"},
  cardImg:'hp-hero', overview:'haiphong',
  key:[['l_nla',"42,000 m²"],['l_units',"1,700 m²+"],['l_clear',"9 m"],['l_power',"~300 kVA / {u}"]],
  gallery:[['hp-hero','photo'],['hp-a','photo'],['hp-b','photo']],
  plans:[['hp-plan',null]],
  specs:{cols:[null], rows:[
    ['l_type',["{rbh} – {single}"]],
    ['l_nla',["42,000 m² ({incl_mezz})"]],
    ['l_units',["1,700 m²+"]],
    ['l_mezz',["255 m² / {u}"]],
    ['l_clear',["9 m"]], ['l_platform',["1.3 m"]], ['l_floor',["2 t/m²"]],
    ['l_loading',["3–4 / {u}, 2–3 {dock}"]], ['l_power',["~300 kVA / {u}"]], ['l_fire',["{fire}"]]
  ]}},
{ id:'sis-tn', name:"Sembcorp Logistics Park Thuy Nguyen", short:"SIS Thuy Nguyen", prov:'hai-phong', cluster:'hai-phong', multi:true, status:'st_leased', map:MAP.tn,
  loc:{en:"VSIP Hai Phong, Dinh Vu – Cat Hai EZ, Hai Phong",vi:"VSIP Hải Phòng, KKT Đình Vũ – Cát Hải, Hải Phòng",zh:"海防市亭武–吉海经济区 VSIP 海防"},
  tag:{en:"Ramp-up multi-storey hybrid with cross-docking on the ground floor.",vi:"Xưởng/kho kết hợp nhiều tầng có đường dốc, khu cross-docking tại tầng trệt.",zh:"配坡道的多层混合型设施，一楼设越库作业区。"},
  cardImg:'tn-hero', overview:'haiphong',
  key:[['l_nla',"19,500 m² ({fl2})"],['l_units',"3,500 – 4,200 m²+"],['l_clear',"9 m"],['l_floor',"3 / 2.5 t/m²"]],
  gallery:[['tn-hero','photo'],['tn-a','photo']],
  plans:[['tn-plan1','f1'],['tn-plan2','f2']],
  specs:{cols:['f1','f2'], rows:[
    ['l_type',["{rbh} – {multi}","{rbh} – {multi}"]],
    ['l_nla',["10,700 m² ({incl})","8,800 m² ({incl})"]],
    ['l_office',["~1,000 m²","~600 m²"]],
    ['l_units',["4,200 m²+ (484 m² office / {u})","3,500 m²+ (~300 m² office / {u})"]],
    ['l_clear',["9 m","9 m"]],
    ['l_platform',["0.8–1.3 m ({xdock})","1.3 m"]],
    ['l_floor',["3 t/m²","2.5 t/m²"]],
    ['l_loading',["3–5, 2–4 {dock}","3–5, 2–4 {dock}"]],
    ['l_power',["~250–315 kVA / {u}","~195–250 kVA / {u}"]],
    ['l_fire',SAME("{fire}",2)], ['l_ramp',SAME("{ramp}",2)]
  ]}},
{ id:'sis-dv', name:"Sembcorp Logistics Park Dinh Vu", short:"SIS Dinh Vu", prov:'hai-phong', cluster:'hai-phong', status:'st_leased',
  loc:{en:"DEEP C Industrial Park, Dinh Vu – Cat Hai EZ, Hai Phong",vi:"KCN DEEP C, KKT Đình Vũ – Cát Hải, Hải Phòng",zh:"海防市亭武–吉海经济区 DEEP C 工业园"},
  tag:{en:"The cluster's largest park – 85,000 m² of port-side hybrid space.",vi:"Dự án lớn nhất cụm – 85.000 m² xưởng/kho kết hợp sát cảng.",zh:"集群内最大园区——85,000 m² 临港混合型空间。"},
  cardImg:'dv-hero', overview:'haiphong',
  key:[['l_nla',"85,000 m²"],['l_units',"3,000 m²+"],['l_clear',"9 m"],['l_floor',"3 t/m²"]],
  gallery:[['dv-hero','photo'],['dv-a','photo']],
  plans:[['dv-plan',null]],
  specs:{cols:[null], rows:[
    ['l_type',["{rbh}"]], ['l_nla',["85,000 m² ({incl})"]], ['l_office',["~5,000 m²"]],
    ['l_units',["3,000 m²+ (~185 m² office / {u})"]],
    ['l_clear',["9 m"]], ['l_platform',["1.3 m"]], ['l_floor',["3 t/m²"]],
    ['l_loading',["3–4, 2–3 {dock}"]], ['l_power',["~170–320 kVA / {u}"]], ['l_fire',["{fire}"]]
  ]}},
{ id:'sih-ndv', name:"Sembcorp Integrated Hub @ Nam Dinh Vu", short:"SIH @ Nam Dinh Vu", prov:'hai-phong', cluster:'hai-phong', status:'st_jan27',
  loc:{en:"Nam Dinh Vu Non-tariff Zone & Industrial Park, Hai Phong",vi:"Khu phi thuế quan và KCN Nam Đình Vũ, Hải Phòng",zh:"海防市南亭武非关税区及工业园"},
  tag:{en:"89,500 m² of single-storey factories and hybrid space in a non-tariff zone.",vi:"89.500 m² nhà xưởng và kho xưởng kết hợp một tầng trong khu phi thuế quan.",zh:"非关税区内 89,500 m² 单层厂房及混合型空间。"},
  cardImg:'ndv-hero', overview:'haiphong',
  key:[['l_nla',"89,500 m²"],['l_units',"3,500 m²+"],['l_clear',"7 – 9 m"],['l_power',"170 – 320 kVA / {u}"]],
  gallery:[['ndv-hero','render']],
  plans:[['ndv-plan',null]],
  specs:{cols:[null], rows:[
    ['l_type',["{rbf} – {blocks} 1, 2, 4, 5 · {rbh} – {block} 3"]],
    ['l_storeys',["{single}"]],
    ['l_nla',["89,500 m²"]],
    ['l_mezz',["184 m²+ / {u}"]],
    ['l_units',["RBF 3,500 m²+ · RBH 4,800 m²+"]],
    ['l_clear',["7 – 9 m"]], ['l_platform',["0.3 – 1.3 m"]], ['l_floor',["2 – 3 t/m²"]],
    ['l_power',["170 – 320 kVA / {u}"]],
    ['l_fire',["{fire}"]]
  ]}},
{ id:'sis-hd', name:"Sembcorp Logistics Park Hai Duong", short:"SIS Hai Duong", prov:'hai-phong', cluster:'hai-phong', status:'st_leased',
  loc:{en:"VSIP Hai Duong, Hai Phong",vi:"VSIP Hải Dương, Hải Phòng",zh:"海防市 VSIP 海阳"},
  tag:{en:"Compact single-storey hybrid units of ~2,000 m².",vi:"Đơn vị xưởng/kho kết hợp một tầng, khoảng 2.000 m².",zh:"约 2,000 m² 的单层混合型单元。"},
  cardImg:'hd-hero', overview:'haiphong',
  key:[['l_nla',"13,000 m²"],['l_units',"~2,000 m²"],['l_clear',"9 m"],['l_power',"~200 kVA / {u}"]],
  gallery:[['hd-hero','photo']],
  plans:[['hd-plan',null]],
  specs:{cols:[null], rows:[
    ['l_type',["{rbh} – {single}"]], ['l_nla',["13,000 m²"]], ['l_units',["~2,000 m²"]],
    ['l_clear',["9 m"]], ['l_platform',["1.3 m"]], ['l_floor',["2 t/m²"]],
    ['l_loading',["3–4 / {u}, 2–3 {dock}"]], ['l_power',["~200 kVA / {u}"]], ['l_fire',["{fire}"]]
  ]}},
{ id:'sih-pd', pipeline:true, name:"Sembcorp Integrated Hub @ Phuc Dien Expansion", short:"SIH @ Phuc Dien Expansion", prov:'hai-phong', cluster:'hai-phong', area:"2,000 m²+", map:MAP.pd,
  loc:{en:"Phuc Dien IP Expansion, Hai Phong (formerly Hai Duong)",vi:"KCN Phúc Điền mở rộng, Hải Phòng (Hải Dương cũ)",zh:"海防市福田工业园扩建区（原海阳省）"},
  tag:{en:"Factory and hybrid blocks planned with flexible units.",vi:"Quy hoạch khối nhà xưởng và kho xưởng kết hợp, diện tích linh hoạt.",zh:"规划厂房及混合型楼栋，单元面积灵活。"}},

/* ===== NORTH – OTHER ===== */
{ id:'sih-mq', name:"Sembcorp Integrated Hub @ Minh Quang", short:"SIH @ Minh Quang", prov:'hung-yen', cluster:'northern-other', status:'st_q1', map:MAP.mq,
  loc:{en:"Minh Quang Industrial Park, Hung Yen",vi:"KCN Minh Quang, Hưng Yên",zh:"兴安省明光工业园"},
  tag:{en:"50,600 m² of single-storey ready-built space on the Hanoi – Hai Phong corridor.",vi:"50.600 m² nhà xưởng xây sẵn một tầng trên hành lang Hà Nội – Hải Phòng.",zh:"河内–海防走廊上 50,600 m² 单层标准厂房。"},
  cardImg:'mq-hero',
  key:[['l_nla',"50,600 m²"],['l_mezz',"220 m²+ / {u}"],['l_clear',"9 m"],['l_power',"300 kVA / {u}"]],
  gallery:[['mq-hero','render']],
  specs:{cols:[null], rows:[
    ['l_storeys',["{single}"]], ['l_nla',["50,600 m²"]], ['l_mezz',["220 m²+ / {u}"]],
    ['l_clear',["9 m"]], ['l_platform',["1.3 m"]], ['l_floor',["2 t/m²"]],
    ['l_loading',["3–4 / {u}"]], ['l_power',["300 kVA / {u}"]]
  ]}},
{ id:'sih-dv3', pipeline:true, name:"Sembcorp Integrated Hub @ Dong Van III", short:"SIH @ Dong Van III", prov:'ninh-binh', cluster:'northern-other', area:"2,300 m²+", map:MAP.dv3,
  loc:{en:"Dong Van III Industrial Park, Ninh Binh (formerly Ha Nam)",vi:"KCN Đồng Văn III, Ninh Bình (Hà Nam cũ)",zh:"宁平省同文 III 工业园（原河南省）"},
  tag:{en:"South of Hanoi along the North–South expressway.",vi:"Phía nam Hà Nội, dọc cao tốc Bắc – Nam.",zh:"位于河内以南，沿南北高速。"}},

/* ===== CENTRAL ===== */
{ id:'sis-na', name:"Sembcorp Logistics Park Nghe An", short:"SIS Nghe An", prov:'nghe-an', cluster:'central', status:'st_ready', map:MAP.na,
  loc:{en:"VSIP Nghe An, Dong Nam Economic Zone, Nghe An",vi:"VSIP Nghệ An, KKT Đông Nam, Nghệ An",zh:"乂安省东南经济区 VSIP 乂安"},
  tag:{en:"39,400 m² of ready-built space 5 km from Vinh City.",vi:"39.400 m² nhà xưởng xây sẵn, cách TP. Vinh 5 km.",zh:"39,400 m² 标准厂房，距荣市 5 公里。"},
  cardImg:'na-hero', overview:'ngheAn',
  key:[['l_nla',"39,400 m²"],['l_units',"2,500 m²+"],['l_clear',"9 m"],['l_power',"300 kVA / {u}"]],
  gallery:[['na-hero','photo'],['na-c','photo'],['na-a','photo'],['na-b','photo']],
  specs:{cols:[null], rows:[
    ['l_type',["{rbh} – {single}"]], ['l_nla',["39,400 m²"]], ['l_units',["2,500 m²+"]], ['l_mezz',["195 m²+ / {u}"]], ['l_parking',["3 {lots}"]],
    ['l_clear',["9 m"]], ['l_platform',["1.3 m"]], ['l_floor',["2 t/m²"]],
    ['l_loading',["3–4 / {u}, 2–3 {dock}"]], ['l_power',["300 kVA / {u}"]],
    ['l_water',["{water}"]], ['l_sewer',["{sewer}"]], ['l_fire',["{fire}"]]
  ]}},
{ id:'sis-qn', name:"Sembcorp Logistics Park Quang Ngai", short:"SIS Quang Ngai", prov:'quang-ngai', cluster:'central', status:'st_ready', map:MAP.qn,
  loc:{en:"VSIP Quang Ngai, Quang Ngai",vi:"VSIP Quảng Ngãi, Quảng Ngãi",zh:"广义省 VSIP 广义"},
  tag:{en:"Two parks (A & B) near Dung Quat Seaport and Chu Lai Airport.",vi:"Hai dự án (A & B) gần Cảng Dung Quất và Sân bay Chu Lai.",zh:"A、B 两个园区，邻近榕橘港与朱莱机场。"},
  cardImg:'qn-hero', overview:'quangNgai',
  key:[['l_nla',"34,000 m² (A + B)"],['l_units',"3,200 – 4,600 m²+"],['l_clear',"9 m"],['l_power',"300 kVA / {u}"]],
  gallery:[['qn-hero','photo'],['qn-b','photo'],['qn-a','photo']],
  plans:[['qn-planA','pA'],['qn-planB','pB']],
  specs:{cols:['pA','pB'], colLabels:{pA:{en:"SLP A Quang Ngai",vi:"SLP A Quảng Ngãi",zh:"SLP A 广义"},pB:{en:"SLP B Quang Ngai",vi:"SLP B Quảng Ngãi",zh:"SLP B 广义"}}, rows:[
    ['l_type',SAME("{rbh} – {single}",2)], ['l_nla',["20,000 m²","14,000 m²"]], ['l_units',["4,600 m²+","3,200 m²+"]],
    ['l_annexbld',["276 m²","195 m²"]], ['l_parking',SAME("3 {lots}",2)],
    ['l_clear',SAME("9 m",2)], ['l_platform',SAME("1.3 m",2)], ['l_floor',SAME("2 t/m²",2)],
    ['l_loading',SAME("3–4 / {u}, 2–3 {dock}",2)], ['l_power',SAME("300 kVA / {u}",2)],
    ['l_water',SAME("{water}",2)], ['l_sewer',SAME("{sewer}",2)], ['l_fire',SAME("{fire}",2)]
  ]}},

/* ===== SOUTH ===== */
{ id:'sih-vsip3', name:"Sembcorp Integrated Hub @ VSIP III Binh Duong", short:"SIH @ VSIP III Binh Duong", prov:'hcmc', cluster:'southern', multi:true, status:'st_q1', map:MAP.vsip3,
  loc:{en:"VSIP III, Ho Chi Minh City (formerly Binh Duong)",vi:"VSIP III, TP. Hồ Chí Minh (Bình Dương cũ)",zh:"胡志明市 VSIP III（原平阳省）"},
  tag:{en:"Two-storey hub with 77,600 m² in the South's manufacturing heartland.",vi:"Trung tâm 2 tầng 77.600 m² tại vùng lõi sản xuất phía Nam.",zh:"位于南部制造业核心区的两层厂房，77,600 m²。"},
  cardImg:'v3-hero', overview:'vsip3',
  key:[['l_nla',"77,600 m² ({fl2})"],['l_units',"~2,300 – 2,500 m²+"],['l_clear',"9 m / 7 m"],['l_floor',"3 / 2 t/m²"]],
  gallery:[['v3-hero','render'],['v3-d','render'],['v3-a','render'],['v3-b','render'],['v3-c','render']],
  plans:[['v3-plan1','f1'],['v3-plan2','f2']],
  specs:{cols:['f1','f2'], rows:[
    ['l_type',["{rbh}","{rbf}"]],
    ['l_nla',["~40,400 m²","~37,000 m²"]],
    ['l_units',["~2,500 m²+","~2,300 m²+"]],
    ['l_office',["150 – 198 m²+ ({mezz})","~141 m²+ ({annex})"]],
    ['l_clear',["9 m","7 m"]], ['l_platform',["1.3 m","0.3 m"]], ['l_floor',["3 t/m²","2 t/m²"]],
    ['l_loading',["3–4 / {u}, 2–3 {dock}","2–3 / {u}"]],
    ['l_power',["143–242 kVA / {u}","243–330 kVA / {u}"]],
    ['l_fire',SAME("{fire}",2)], ['l_ramp',SAME("{ramp}",2)]
  ]}},
{ id:'sih-lmx3', pipeline:true, name:"Sembcorp Integrated Hub @ Le Minh Xuan 3", short:"SIH @ Le Minh Xuan 3", prov:'hcmc', cluster:'southern', area:"2,300 m²+",
  loc:{en:"Le Minh Xuan 3 Industrial Park, Ho Chi Minh City",vi:"KCN Lê Minh Xuân 3, TP. Hồ Chí Minh",zh:"胡志明市黎明春 3 工业园"},
  tag:{en:"West of the city centre, close to the Mekong Delta gateway.",vi:"Phía tây trung tâm thành phố, gần cửa ngõ Đồng bằng sông Cửu Long.",zh:"位于市中心以西，邻近湄公河三角洲门户。"}},
{ id:'sih-labs', pipeline:true, name:"Sembcorp Integrated Hub @ Loc An Binh Son", short:"SIH @ Loc An Binh Son", prov:'dong-nai', cluster:'southern', area:"2,300 m²+",
  loc:{en:"Loc An – Binh Son Industrial Park, Dong Nai",vi:"KCN Lộc An – Bình Sơn, Đồng Nai",zh:"同奈省禄安–平山工业园"},
  tag:{en:"Next to the future Long Thanh International Airport.",vi:"Cạnh Sân bay Quốc tế Long Thành tương lai.",zh:"毗邻建设中的隆城国际机场。"}}
];

const CLUSTER_INTRO = {
  'bac-ninh':{en:"<b>North – Bac Ninh Cluster.</b> Ready-built facilities in Bac Ninh's premier electronics ecosystem.",vi:"<b>Cụm Miền Bắc – Bắc Ninh.</b> Nhà xưởng xây sẵn trong hệ sinh thái điện tử hàng đầu Bắc Ninh.",zh:"<b>北部 – 北宁集群。</b>位于北宁顶级电子产业生态圈的标准厂房。"},
  'hai-phong':{en:"<b>North – Hai Phong Cluster.</b> Port-led industrial & logistics destination at Vietnam's deep-sea port hub.",vi:"<b>Cụm Miền Bắc – Hải Phòng.</b> Điểm đến công nghiệp & logistics gắn với cảng nước sâu.",zh:"<b>北部 – 海防集群。</b>依托深水港枢纽的港口型工业与物流目的地。"},
  'northern-other':{en:"<b>North – Other.</b> Integrated hubs in Hung Yen and Ninh Binh, extending the Hanoi growth corridor.",vi:"<b>Miền Bắc – Khác.</b> Các trung tâm tích hợp tại Hưng Yên và Ninh Bình, mở rộng hành lang tăng trưởng quanh Hà Nội.",zh:"<b>北部 – 其他。</b>兴安与宁平的综合园区，延伸河内增长走廊。"},
  'central':{en:"<b>Central Cluster.</b> Thriving industrial hubs with investor-friendly policies in Nghe An and Quang Ngai.",vi:"<b>Cụm Miền Trung.</b> Trung tâm công nghiệp năng động với chính sách thân thiện nhà đầu tư tại Nghệ An và Quảng Ngãi.",zh:"<b>中部集群。</b>乂安与广义投资政策友好、蓬勃发展的工业中心。"},
  'southern':{en:"<b>South Cluster.</b> Fast-start options for global manufacturers around Vietnam's commercial hub.",vi:"<b>Cụm Miền Nam.</b> Giải pháp triển khai nhanh cho nhà sản xuất toàn cầu quanh trung tâm thương mại của Việt Nam.",zh:"<b>南部集群。</b>为全球制造商在越南商业中心周边提供快速投产方案。"}
};

const URLS = {
  privacy:'https://www.sembcorp.com/site-services-pages/privacy-statement/',
  terms:'https://www.sembcorp.com/site-services-pages/terms-of-use/'
};

/* ---------------- HELPERS ---------------- */
let lang = 'en';
let activeCluster = 'bac-ninh';
let activeProv = null;
const $ = (s, r=document) => r.querySelector(s);
const $$ = (s, r=document) => Array.from(r.querySelectorAll(s));
const t = k => (T[lang] && T[lang][k]) || T.en[k] || k;
const tv = s => String(s).replace(/\{(\w+)\}/g, (m,k) => (V[lang][k] !== undefined ? V[lang][k] : m));
const loc = o => (o && (o[lang] || o.en)) || '';
const esc = s => String(s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const img = n => `img/${n}.jpg`;
const fmt = n => n.toLocaleString(lang === 'vi' ? 'vi-VN' : 'en-US');
const provName = p => PROVINCES[p][lang] || PROVINCES[p].en;
const byCluster = c => PROJECTS.filter(p => p.cluster === c);
const byProv = pv => PROJECTS.filter(p => p.prov === pv);

/* ---------------- MAP ---------------- */
const SVGNS = 'http://www.w3.org/2000/svg';
function buildMap() {
  const pinLayer = $('#pinLayer');
  pinLayer.innerHTML = '';
  Object.entries(PROVINCES).forEach(([key, p]) => {
    const g = document.createElementNS(SVGNS, 'g');
    g.setAttribute('class', 'pin'); g.setAttribute('data-prov', key);
    g.setAttribute('transform', `translate(${p.x} ${p.y})`);
    g.setAttribute('tabindex', '0'); g.setAttribute('role', 'button');
    g.innerHTML = `<circle class="hit" cx="0" cy="-8" r="9"/><circle class="halo" cx="0" cy="-8" r="2"/>`+
      `<path class="drop" d="M0 0C-1.2-3.4-5.2-5.6-5.2-9.2A5.2 5.2 0 1 1 5.2-9.2C5.2-5.6 1.2-3.4 0 0Z"/>`+
      `<circle class="dot" cx="0" cy="-9.2" r="2"/>`;
    g.addEventListener('click', () => selectProvince(key, true));
    g.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); selectProvince(key, true); } });
    g.addEventListener('mouseenter', () => showTip(key));
    g.addEventListener('mouseleave', hideTip);
    g.addEventListener('focus', () => showTip(key));
    g.addEventListener('blur', hideTip);
    pinLayer.appendChild(g);
  });
  // ensure the Bac Ninh pin (northernmost) draws above its neighbours
  $$('.pv').forEach(el => {
    el.addEventListener('click', () => selectProvince(el.dataset.prov, true));
    el.addEventListener('mouseenter', () => showTip(el.dataset.prov));
    el.addEventListener('mouseleave', hideTip);
  });
}
function buildCities() {
  const layer = $('#cityLayer'); layer.innerHTML = '';
  CITIES.forEach(c => {
    const label = loc(c.label);
    const w = Math.max(26, label.length * (lang === 'zh' ? 7.8 : 4.3) + 8);
    const g = document.createElementNS(SVGNS, 'g'); g.setAttribute('class', 'city');
    const rx = c.x - 6.5 - w;
    g.innerHTML = `<rect x="${rx}" y="${c.y - 5.5}" width="${w}" height="11" rx="5.5"/>`+
      `<text x="${rx + w/2}" y="${c.y + 2.7}" text-anchor="middle">${esc(label)}</text>`+
      `<path class="star" transform="translate(${c.x} ${c.y}) scale(.95)" d="M0-4.2 1.2-1.3 4.2-1.3 1.8.5 2.6 3.5 0 1.7-2.6 3.5-1.8.5-4.2-1.3-1.2-1.3Z"/>`;
    layer.appendChild(g);
  });
}
function showTip(key) {
  const tip = $('#mapTip'), stage = $('#mapStage');
  const pin = $(`.pin[data-prov="${key}"]`);
  if (!pin) return;
  const sr = stage.getBoundingClientRect(), pr = pin.getBoundingClientRect();
  const list = byProv(key);
  const n = list.length;
  tip.innerHTML = `<b>${esc(provName(key))}</b>${n} ${n === 1 ? t('tip_project') : t('tip_projects')}`;
  tip.style.left = (pr.left + pr.width/2 - sr.left) + 'px';
  tip.style.top = (pr.top - sr.top) + 'px';
  tip.classList.add('show');
  $$(`.pin[data-prov="${key}"], .pv[data-prov="${key}"]`).forEach(e => e.classList.add('hl'));
}
function hideTip() {
  $('#mapTip').classList.remove('show');
  $$('.pin.hl, .pv.hl').forEach(e => e.classList.remove('hl'));
}
function paintMap() {
  const provs = activeProv ? [activeProv] : [...new Set(byCluster(activeCluster).map(p => p.prov))];
  $$('.pin').forEach(el => el.classList.toggle('active', provs.includes(el.dataset.prov)));
  $$('.pv').forEach(el => el.classList.toggle('active', provs.includes(el.dataset.prov)));
  $$('.prov-chip').forEach(el => el.classList.toggle('active', provs.includes(el.dataset.prov)));
  // bring active pins to front
  const layer = $('#pinLayer');
  $$('.pin.active', layer).forEach(el => layer.appendChild(el));
}
function buildProvChips() {
  $('#provList').innerHTML = Object.keys(PROVINCES).map(k =>
    `<button type="button" class="prov-chip" data-prov="${k}">${esc(provName(k))}</button>`).join('');
  $$('.prov-chip').forEach(b => b.addEventListener('click', () => selectProvince(b.dataset.prov, true)));
}
function selectProvince(key, scroll) {
  const cluster = PROVINCES[key].cluster;
  activeProv = key;
  setCluster(cluster, false);
  activeProv = key;
  paintMap();
  const cards = $$(`#${cluster} [data-prov="${key}"]`);
  cards.forEach(c => { c.classList.remove('flash'); void c.offsetWidth; c.classList.add('flash'); setTimeout(() => c.classList.remove('flash'), 1800); });
  if (scroll && cards[0] && window.matchMedia('(max-width: 992px)').matches) {
    cards[0].scrollIntoView({behavior:'smooth', block:'center'});
  }
}

/* ---------------- TABS + CARDS ---------------- */
function buildTabs() {
  $('#clusterTabs').innerHTML = CLUSTERS.map(c => {
    const n = byCluster(c.id).length;
    return `<button class="tab-btn${c.id === activeCluster ? ' active' : ''}" role="tab" data-cluster="${c.id}">${esc(t(c.tab))}<span class="count">${n}</span></button>`;
  }).join('');
  $$('.tab-btn').forEach(b => b.addEventListener('click', () => { setCluster(b.dataset.cluster, true); }));
}
function setCluster(id, resetProv) {
  activeCluster = id;
  if (resetProv) activeProv = null;
  $$('.tab-btn').forEach(b => b.classList.toggle('active', b.dataset.cluster === id));
  $$('.cluster-content').forEach(c => c.classList.toggle('active', c.id === id));
  paintMap();
}
const MAP_ICON = '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#EA4335" d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z"/></svg>';
function mapBtn(p) {
  return p.map ? `<a class="btn btn-map" href="${p.map}" target="_blank" rel="noopener">${MAP_ICON}${esc(t('btn_map'))}</a>` : '';
}
function stBadge(p) {
  if (!p.status) return '';
  const cls = p.status === 'st_leased' ? ' leased' : p.status === 'st_ready' ? ' ready' : '';
  return `<span class="badge badge-st${cls}">${esc(t(p.status))}</span>`;
}
function msBadge(p) {
  return p.multi ? `<span class="badge badge-ms"><i class="fa-solid fa-layer-group"></i>${esc(t('multi_storey'))}</span>` : '';
}
function cardHTML(p) {
  const specs = p.key.map(([k, v]) => `<div class="spec-item"><span class="spec-label">${esc(t(k))}</span><span class="spec-value">${esc(tv(v))}</span></div>`).join('');
  return `<article class="project-card" data-id="${p.id}" data-prov="${p.prov}" tabindex="0" aria-label="${esc(p.name)}">
    <div class="project-img${p.cardPlan ? ' plan' : ''}" style="background-image:url('${img(p.cardImg)}')">
      <span class="badge badge-prov">${esc(provName(p.prov))}</span>${stBadge(p)}${msBadge(p)}
    </div>
    <div class="project-info">
      <div>
        <h3>${esc(p.name)}</h3>
        <div class="project-loc"><i class="fa-solid fa-location-dot"></i><span>${esc(loc(p.loc))}</span></div>
        <p class="project-tag">${esc(loc(p.tag))}</p>
        ${p.multi ? `<div class="ms-line"><i class="fa-solid fa-layer-group"></i>${esc(t(p.msShort ? 'ms_line_ndv' : 'ms_line'))}</div>` : ''}
      </div>
      <div class="project-specs">${specs}</div>
      <div class="project-actions">
        ${mapBtn(p)}
        <button type="button" class="btn btn-outline" data-details="${p.id}"><i class="fa-solid fa-circle-info"></i>${esc(t('btn_details'))}</button>
        <a href="#enquire" class="btn btn-solid" data-enquire="${p.short}">${esc(t('btn_enquire'))}</a>
      </div>
    </div>
  </article>`;
}
function pipeHTML(p) {
  const areaLbl = p.area ? t('cs_from') : t('cs_area'), area = p.area ? esc(p.area) : esc(t('cs_tbc'));
  return `<div class="cs-card" data-prov="${p.prov}">
    <div class="cs-img"><span class="badge badge-prov">${esc(provName(p.prov))}</span><b>${esc(t('cs_title'))}</b><span>${esc(t('cs_sub'))}</span></div>
    <div class="cs-body">
      <h4>${esc(p.name)}</h4>
      <div class="project-loc"><i class="fa-solid fa-location-dot"></i><span>${esc(loc(p.loc))}</span></div>
      <div class="cs-area"><span>${esc(areaLbl)}</span><b>${area}</b></div>
      <p>${esc(loc(p.tag))}</p>
      <div class="cs-actions">${mapBtn(p)}<a href="#enquire" class="btn btn-solid" data-enquire="${p.short}">${esc(t('btn_enquire'))}</a></div>
    </div>
  </div>`;
}
function buildCards() {
  $('#projectsWrapper').innerHTML = CLUSTERS.map(c => {
    const list = byCluster(c.id);
    const live = list.filter(p => !p.pipeline), pipe = list.filter(p => p.pipeline);
    return `<div id="${c.id}" class="cluster-content${c.id === activeCluster ? ' active' : ''}" role="tabpanel">
      <div class="cluster-intro">${loc(CLUSTER_INTRO[c.id])}</div>
      ${live.map(cardHTML).join('')}
      ${pipe.length ? `${live.length ? `<div class="pipeline-head">${esc(t('pipeline_head'))}</div>` : ''}<div class="cs-grid">${pipe.map(pipeHTML).join('')}</div>` : ''}
    </div>`;
  }).join('');
  $$('.project-card').forEach(card => {
    card.addEventListener('click', e => { if (e.target.closest('[data-enquire],[data-details],.btn-map')) return; openProject(card.dataset.id); });
    card.addEventListener('keydown', e => { if (e.key === 'Enter' && e.target === card) openProject(card.dataset.id); });
    card.addEventListener('mouseenter', () => { $$(`.pin[data-prov="${card.dataset.prov}"], .pv[data-prov="${card.dataset.prov}"]`).forEach(x => x.classList.add('hl')); });
    card.addEventListener('mouseleave', () => { $$('.pin.hl, .pv.hl').forEach(x => x.classList.remove('hl')); });
  });
  $$('[data-enquire]').forEach(a => a.addEventListener('click', () => prefill(a.dataset.enquire)));
}

/* ---------------- PROJECT MODAL ---------------- */
function colLabel(p, c) {
  if (!c) return '';
  if (p.specs.colLabels && p.specs.colLabels[c]) return loc(p.specs.colLabels[c]);
  return t(c);
}
function openProject(id) {
  const p = PROJECTS.find(x => x.id === id); if (!p) return;
  const ov = p.overview ? OVERVIEW[p.overview] : null, ovl = ov ? (ov[lang] || ov.en) : null;
  const g = p.gallery;
  const capFor = it => {
    return it[1] === 'render' ? t('m_render') : t('m_photo');
  };
  const thumbs = g.length > 1 ? `<div class="gal-thumbs">${g.map((it, i) =>
      `<button type="button" class="${i === 0 ? 'active' : ''}" data-gi="${i}" aria-label="${esc(capFor(it))}"><img src="${img(it[0])}" alt="" loading="lazy"></button>`).join('')}</div>` : '';
  const cols = p.specs.cols;
  const hasHead = cols.length > 1 || cols[0];
  const table = `<div class="spec-table-wrap"><table class="spec-table">
      ${hasHead ? `<thead><tr><th></th>${cols.map(c => `<th>${esc(colLabel(p, c))}</th>`).join('')}</tr></thead>` : ''}
      <tbody>${p.specs.rows.map(([k, vals]) => `<tr><th>${esc(t(k))}</th>${vals.map(v => `<td>${esc(tv(v))}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
  const units = p.units ? `<div class="m-section"><h3>${esc(t('m_units'))}</h3><div class="unit-grid">${p.units.map(fl =>
      fl.blocks.map(([bn, rows]) => `<div class="unit-block"><h4>${esc(t(fl.t))} · ${esc(bn)}</h4><table>
        <tr><th>${esc(t('m_unit'))}</th><th>${esc(t('m_area'))}</th><th>${esc(t('m_off'))}</th></tr>
        ${rows.map(r => `<tr><td>${r[0]}</td><td>${fmt(r[1])} m²</td><td>${fmt(r[2])} m²</td></tr>`).join('')}</table></div>`).join('')).join('')}</div></div>` : '';
  const plans = (p.plans && p.plans.length) ? `<div class="m-section"><h3>${esc(t('m_plans'))}</h3><div class="plan-grid">${p.plans.map(([im, c]) =>
      `<a class="plan-item" href="${img(im)}" data-lightbox="${img(im)}"><img src="${img(im)}" alt="${esc(t('m_plan'))}" loading="lazy"><span>${esc(c ? colLabel(p, c) : t('m_plan'))}<i class="fa-solid fa-up-right-and-down-left-from-center"></i></span></a>`).join('')}</div></div>` : '';
  const conn = !ov ? '' : ov.conn.map(([ic, name, val]) => `<div><i class="fa-solid ${ic}"></i><span>${esc(loc(name))}<b>${esc(typeof val === 'string' ? val : loc(val))}</b></span></div>`).join('');
  $('#mContent').innerHTML = `
    <div class="gal-main" id="galMain"><img src="${img(g[0][0])}" alt="${esc(p.name)}"><div class="gal-cap" id="galCap">${esc(capFor(g[0]))}</div></div>
    ${thumbs}
    <div class="m-body">
      <div class="m-head"><div>
        <h2 id="mTitle">${esc(p.name)}</h2>
        <p class="m-sub"><i class="fa-solid fa-location-dot"></i> ${esc(loc(p.loc))}</p>
        <div class="m-chips"><span class="chip">${esc(provName(p.prov))}</span><span class="chip">${esc(t(CLUSTERS.find(c => c.id === p.cluster).tab))}</span>
        ${p.status ? `<span class="chip st">${esc(t(p.status))}</span>` : ''}
        ${p.multi ? `<span class="chip ms"><i class="fa-solid fa-layer-group"></i> ${esc(t(p.msShort ? 'ms_line_ndv' : 'ms_line'))}</span>` : ''}</div>
      </div></div>
      ${ov ? `<div class="m-section"><h3>${esc(t('m_overview'))}</h3>
        <div class="m-overview"><p><b>${esc(t('m_location'))}</b>${esc(ovl.loc)}</p><p><b>${esc(t('m_industry'))}</b>${esc(ovl.ind)}</p></div></div>
      <div class="m-section"><h3>${esc(t('m_conn'))}</h3><div class="conn">${conn}</div></div>` : ''}
      <div class="m-section"><h3>${esc(t('m_specs'))}</h3>${table}</div>
      ${plans}
      ${units}
      <p class="m-note">${esc(t('m_note'))}</p>
      <div class="m-cta">
        <a href="#enquire" class="btn btn-solid" data-modal-enquire="${p.short}"><i class="fa-solid fa-paper-plane"></i>${esc(t('btn_enquire'))}</a>
        ${mapBtn(p)}
        <a href="tel:+84812979000" class="btn btn-outline"><i class="fa-solid fa-phone"></i>${esc(t('m_download'))} (+84) 812 979 000</a>
      </div>
    </div>`;
  $$('.gal-thumbs button').forEach(b => b.addEventListener('click', () => {
    const it = g[+b.dataset.gi];
    $('#galMain img').src = img(it[0]);
    $('#galCap').textContent = capFor(it);
    $$('.gal-thumbs button').forEach(x => x.classList.toggle('active', x === b));
  }));
  $('[data-modal-enquire]').addEventListener('click', e => { prefill(e.currentTarget.dataset.modalEnquire); closeModals(); });
  openModal('#projectModal');
  // sync map with the opened project
  if (p.cluster !== activeCluster) setCluster(p.cluster, true);
}
let lastFocus = null;
function openModal(sel) {
  lastFocus = document.activeElement;
  const m = $(sel); m.classList.add('open'); m.setAttribute('aria-hidden', 'false');
  m.scrollTop = 0; document.body.classList.add('modal-open');
  const c = $('.modal-close', m); if (c) c.focus();
}
function closeModals() {
  $$('.modal.open').forEach(m => { m.classList.remove('open'); m.setAttribute('aria-hidden', 'true'); });
  document.body.classList.remove('modal-open');
  if (lastFocus && lastFocus.focus) try { lastFocus.focus({preventScroll:true}); } catch (e) {}
}


/* ---------------- FORM ---------------- */
function buildSelect() {
  const sel = $('#projectSelect'); const cur = sel.value;
  let html = `<option value="">${esc(t('opt_select'))}</option>`;
  CLUSTERS.forEach(c => {
    html += `<optgroup label="${esc(t(c.tab))}">` + byCluster(c.id).map(p => `<option value="${esc(p.short)}">${esc(p.short)}</option>`).join('') + `</optgroup>`;
  });
  html += `<option value="Not sure / please advise">${esc(t('opt_any'))}</option>`;
  sel.innerHTML = html; sel.value = cur;
}
function prefill(name) { const s = $('#projectSelect'); s.value = name; }
function showErr(msg) { const e = $('#formErr'); e.textContent = msg; e.classList.toggle('show', !!msg); }
// Web3Forms access key (lấy miễn phí tại https://web3forms.com) – enquiry sẽ gửi về email đăng ký key này
const WEB3FORMS_KEY = '68b65868-2c50-404d-a10c-27bb79ea47a8';
function setupForm() {
  const form = $('#enquiryForm');
  form.addEventListener('submit', async e => {
    e.preventDefault();
    showErr('');
    const req = ['fullName', 'companyName', 'email', 'phone', 'projectSelect'];
    const missing = req.filter(id => !$('#' + id).value.trim());
    req.forEach(id => $('#' + id).style.borderColor = missing.includes(id) ? '#F87171' : '');
    if (missing.length) { showErr(t('err_required')); $('#' + missing[0]).focus(); return; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test($('#email').value.trim())) { showErr(t('err_email')); $('#email').focus(); return; }
    if (!$('#agreeTerms').checked || !$('#consentData').checked) { showErr(t('err_consent')); return; }
    $('#formLang').value = lang;
    const btn = $('#submitBtn'); btn.disabled = true; btn.textContent = t('sending');
    try {
      const data = Object.fromEntries(new FormData(form));
      if (data['bot-field']) return; // spam bot
      delete data['bot-field']; delete data['form-name'];
      const project = $('#projectSelect').selectedOptions[0] ? $('#projectSelect').selectedOptions[0].textContent : '';
      const payload = Object.assign({
        access_key: WEB3FORMS_KEY,
        subject: 'New Leasing Enquiry – ' + project + ' – ' + (data.company || ''),
        from_name: 'Sembcorp Leasing Website',
        replyto: data.email || ''
      }, data);
      const res = await fetch('https://api.web3forms.com/submit', { method:'POST', headers:{'Content-Type':'application/json', 'Accept':'application/json'}, body: JSON.stringify(payload) });
      const out = await res.json().catch(() => ({}));
      if (!res.ok || out.success === false) throw new Error(out.message || ('HTTP ' + res.status));
      const projectName = $('#projectSelect').selectedOptions[0] ? $('#projectSelect').selectedOptions[0].textContent : '';
      form.style.display = 'none';
      $('#successMsg').textContent = t('success_msg') + projectName;
      $('#formSuccess').classList.add('show');
    } catch (err) {
      showErr(t('err_send'));
    } finally {
      btn.disabled = false; btn.textContent = t('btn_submit');
    }
  });
}

/* ---------------- LANGUAGE ---------------- */
function applyLang(l) {
  lang = T[l] ? l : 'en';
  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : lang;
  $('#langSelect').value = lang;
  $$('[data-i18n]').forEach(el => { const k = el.getAttribute('data-i18n'); if (T[lang][k] || T.en[k]) el.textContent = t(k); });
  $$('[data-i18n-ph]').forEach(el => { el.placeholder = t(el.getAttribute('data-i18n-ph')); });
  buildTabs(); buildCards(); buildProvChips(); buildCities(); buildSelect(); paintMap();
  if ($('#successMsg').textContent) { /* keep */ }
  try { localStorage.setItem('sc-lang', lang); } catch (e) {}
  // re-render any open modal
  const open = $('#projectModal.open #mTitle');
  if (open) { const p = PROJECTS.find(x => x.name === open.textContent); if (p) openProject(p.id); }
}

/* ---------------- INIT ---------------- */
function init() {
  $('#statProjects').textContent = PROJECTS.length;
  buildMap();
  let l = 'en';
  try { l = localStorage.getItem('sc-lang') || ''; } catch (e) {}
  if (!l) { const nav = (navigator.language || 'en').toLowerCase(); l = nav.startsWith('vi') ? 'vi' : nav.startsWith('zh') ? 'zh' : 'en'; }
  const q = new URLSearchParams(location.search).get('lang'); if (q) l = q;
  applyLang(l);
  $('#langSelect').addEventListener('change', e => applyLang(e.target.value));
  document.addEventListener('click', e => {
    const lb = e.target.closest('[data-lightbox]');
    if (lb) { e.preventDefault(); const L = $('#lightbox'); $('img', L).src = lb.dataset.lightbox; L.classList.add('open'); return; }
    if (e.target.closest('[data-lb-close]') || e.target.id === 'lightbox') { $('#lightbox').classList.remove('open'); return; }
    if (e.target.closest('[data-close]') || e.target.classList.contains('modal')) closeModals();
    const d = e.target.closest('[data-details]'); if (d) { e.stopPropagation(); openProject(d.dataset.details); }
  });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') { if ($('#lightbox.open')) $('#lightbox').classList.remove('open'); else closeModals(); } });
  setupForm();
  const hash = location.hash.replace('#', '');
  if (PROJECTS.some(p => p.id === hash)) openProject(hash);
}
document.addEventListener('DOMContentLoaded', init);
})();
