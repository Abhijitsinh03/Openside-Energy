var dataArray = [];
$.each(jsonData,function(i,value){
  var jsonArray = {
    lat: parseFloat(value.latitude),
    lng: parseFloat(value.longitude),
    name: value.location_title,
    description:value.description,
    image_url:"http://localhost/openside/wp-content/uploads/2023/03/Asset-23-2.png"
  };
  dataArray.push(jsonArray);
});
var simplemaps_ukmap_mapdata={
  main_settings: {
   //General settings
    width: "600", //'700' or 'responsive'
    background_color: "#FFFFFF",
    background_transparent: "yes",
    border_color: "#ffffff",
    popups: "off",
    
    //State defaults
    state_description: "State description",
    state_color: "#88A4BC",
    state_hover_color: "#3B729F",
    state_url: "",
    border_size: 1.5,
    all_states_inactive: "yes",
    all_states_zoomable: "no",
    
    //Location defaults
    location_description: "Location description",
    location_color: "#FF0067",
    location_opacity: 0.8,
    location_hover_opacity: 1,
    location_url: "",
    location_size: 50,
    location_type: "image",
    image_url:"http://localhost/openside/wp-content/uploads/2023/03/Asset-23-2.png",
    location_border_color: "#FFFFFF",
    location_border: 2,
    location_hover_border: 2.5,
    all_locations_inactive: "no",
    all_locations_hidden: "no",
    
    //Label defaults
    label_color: "#d5ddec",
    label_hover_color: "#d5ddec",
    label_size: 22,
    label_font: "Arial",
    hide_labels: "no",
    manual_zoom: "no",
    back_image: "no",
    arrow_color: "#cecece",
    arrow_color_border: "#808080",
    initial_back: "no",
    initial_zoom: -1,
    initial_zoom_solo: "no",
    region_opacity: 1,
    region_hover_opacity: 0.6,
    zoom_out_incrementally: "yes",
    zoom_percentage: 0.99,
    zoom_time: 0.5,
    
    //Popup settings
    popup_color: "white",
    popup_opacity: 0.9,
    popup_shadow: 1,
    popup_corners: 5,
    popup_font: "12px/1.5 Verdana, Arial, Helvetica, sans-serif",
    popup_nocss: "no",
    
    //Advanced settings
    div: "map",
    auto_load: "yes",
    url_new_tab: "no",
    images_directory: "default",
    fade_time: 0.1,
    link_text: "View Website",
    state_image_url: "",
    state_image_position: "",
    location_image_url: "",

    keyboard_navigation:"no",

  },
  state_specific: {
    EE: {
      name: "East",
      description: " "
    },
    EM: {
      name: "East Midlands",
      description: " "
    },
    ES: {
      name: "Eastern Scotland",
      description: " "
    },
    EW: {
      name: "East Wales",
      description: " "
    },
    GL: {
      name: "Greater London",
      description: " "
    },
    HI: {
      name: "Highlands and Islands",
      description: " "
    },
    NE: {
      name: "North East",
      description: " "
    },
    NI: {
      name: "Northern Ireland",
      description: " "
    },
    NS: {
      name: "North Eastern Scotland",
      description: " "
    },
    NW: {
      name: "North West",
      description: " "
    },
    SE: {
      name: "South East",
      description: " "
    },
    SS: {
      name: "South Western Scotland",
      description: " "
    },
    SW: {
      name: "South West",
      description: " "
    },
    WM: {
      name: "West Midlands",
      description: " "
    },
    WV: {
      name: "West Wales and the Valleys",
      description: " "
    },
    YH: {
      name: "Yorkshire and the Humber",
      description: " "
    }
  },
  locations: dataArray,
  labels: {},
  legend: {
    entries: []
  },
  regions: {}
};
$(document).on('click','.sm_location',function(){
  dataInfoArray = jsonData[$(this).prop('classList')[1].split('_')[2]];
  $('.mapLocationTitle').text(dataInfoArray.location_title);
  $('.mapLocationDescription').text(dataInfoArray.description);
  $('.mapLocationAddress').text(dataInfoArray.address);
  $('.mapLocationNumber').text(dataInfoArray.phone_number);
  $('.mapLocationTiming').text(dataInfoArray.opening_times);
  $('.mapLocationPhoneLink').attr("href", "tel:"+dataInfoArray.phone_number);
  $('.mapLocationMailLink').attr("href", "mailto:"+dataInfoArray.email_address);
});