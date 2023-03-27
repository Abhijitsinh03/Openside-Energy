<?php
/* Enqueue Styles */
if ( ! function_exists('thr_enqueue_styles') ) {
    function thr_enqueue_styles() {
        wp_enqueue_style( 'twenty-twenty-three-style', get_template_directory_uri() .'/style.css' );
    }
    add_action('wp_enqueue_scripts', 'thr_enqueue_styles');
}

/*
* Create Map section with clickable markers using Short Code method
*/
add_shortcode('map-location', 'subscribe_link');
function subscribe_link(){
    global $post;
    $fields = get_field_objects($post->ID);
    $finalData = array();
    foreach ($fields['map_data']['value'] as $key => $mapData) {
        foreach ($mapData as $key2 => $value) {
            $finalData[$key][$key2] = $value;
        }
    }
    $html = '
    <script>
        var jsonData = '.json_encode($finalData).';
    </script>
    <script src="http://localhost/openside/wp-content/themes/twenty-twenty-three-child/js/mapdata.js"></script>
    <script src="https://cdn.jsdelivr.net/gh/Abhijitsinh03/myWebsite_01/ukmap.js"></script>
    <div class="row" style="background-color: #f7f7e7;width:100%;">
    <div class="col-md-6" style="display: flex;justify-content: center;align-items: center;">
    <div style="background-color: white;width: 70%;flex-shrink: 0;padding: 25px;">
    <h2 class="has-text-color mapLocationTitle" style="color:#00696a;font-size:clamp(18.75px, 1.172rem + ((1vw - 7.68px) * 0.751), 25px);font-style:normal;font-weight:700">Openside Energy</h2>
    <p class="has-text-color mapLocationDescription" style="color:#00696a;font-size:12px;font-style:normal;font-weight:500">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy </p>
    <p class="has-text-color" style="color:#00696a;font-size:12px;font-style:normal;font-weight:500"><img decoding="async" loading="lazy" width="16" height="16" class="wp-image-180" style="width: 16px;" src="http://localhost/openside/wp-content/uploads/2023/03/pin.png" alt="">   <span class="mapLocationAddress">Churchill House, 29 Mill Hill Road, Pontefract, WF8 4HY</span></p>
    <p class="has-text-color" style="color:#00696a;font-size:12px;font-style:normal;font-weight:500"><img decoding="async" loading="lazy" width="16" height="16" class="wp-image-182" style="width: 16px;" src="http://localhost/openside/wp-content/uploads/2023/03/phone-call.png" alt="">  <span class="mapLocationNumber">01234678890</span></p>
    <p class="has-text-color" style="color:#00696a;font-size:12px;font-style:normal;font-weight:500"><img decoding="async" loading="lazy" width="16" height="16" class="wp-image-181" style="width: 16px;" src="http://localhost/openside/wp-content/uploads/2023/03/clock.png" alt="">  <span class="mapLocationTiming">Monday – Friday, 9 am – 5 pm</span></p>
    <div class="is-layout-flex wp-block-buttons">
    <div class="wp-block-button has-custom-font-size is-style-fill" style="font-size:clamp(14px, 0.875rem + ((1vw - 7.68px) * 0.24), 16px);">
    <a class="wp-block-button__link has-text-color has-background wp-element-button mapLocationPhoneLink" href="tel:01234567890" style="border-radius:100px;color:#00696a;background-color:#e7e79c">CALL</a>
    </div>
    <div class="wp-block-button has-custom-font-size is-style-fill" style="font-size:clamp(14px, 0.875rem + ((1vw - 7.68px) * 0.24), 16px);">
    <a class="wp-block-button__link has-text-color has-background wp-element-button mapLocationMailLink" href="mailto:test@gmail.com" style="border-radius:100px;color:#00696a;background-color:#e7e79c">EMAIL US</a>
    </div>
    </div>
    </div>
    </div>
    <div class="col-md-6">
    <div id="map"></div>
    </div>
    </div>';
    return $html;
}

/*
* Create Product List using Short Code method
*/
add_shortcode('product-list', 'productList');
function productList(){
 global $post;
 $fields = get_field_objects($post->ID);
 $html = '';
 foreach ($fields['our_product']['value'] as $key => $productValue) {
    $html .= '<div class="row m-0">
    <div class="col-md-5 col-sm-5 p-0 product-image">
    <img src="'.$productValue['product_image']['url'].'" style="max-width: 100%;max-height: 100%;"/>
    </div>
    <div class="col-sm-7 col-md-7 product-info" style="padding:5%;display: flex;justify-content: center;align-items: center;">
    <div>
    <div>
    <h2 class="has-small-font-size" style="font-style:normal;font-weight:100;text-transform:uppercase;color:white;"><img class="wp-image-142" style="width: 15px;" src="http://localhost/openside/wp-content/uploads/2023/03/Asset-21-2.png" alt=""> OUR STORY</h2>
    </div>
    <div>
    <h2 class="has-text-color product_title">'.$productValue['product_title'].'</h2>
    </div>
    <div class="product_text">'.$productValue['product_text'].'</div>
    </div>
    </div>
    </div>';
}
return $html;
}

/*
* Create Who we work slider using Short Code method
*/
add_shortcode('who-we-work', 'whoWeWorkSlider');
function whoWeWorkSlider(){
    global $post;
    $fields = get_field_objects($post->ID);
    $html = '<div class="container"><section class="logo-carousel slider">';
    foreach ($fields['who_we_work']['value'] as $key => $customerValue) {
        $html.='<div class="slide"><img src="'.$customerValue['logo'].'"></div>';
    }
    $html.='</section></div>';
    $html.='<script>
    $(document).ready(function() {
      $(".logo-carousel").slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
          breakpoint: 768,
          settings: {
            slidesToShow: 3
        }
        }, {
          breakpoint: 520,
          settings: {
            slidesToShow: 1
        }
        }]
        });
        });
        </script>';
        return $html;
    }