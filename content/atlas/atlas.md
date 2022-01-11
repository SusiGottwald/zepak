+++
# Hero widget.
widget = "blank"  # See https://sourcethemes.com/academic/docs/page-builder/
headless = true  # This file represents a page section.
active = true  # Activate this widget? true/false
weight = 20  # Order that this section will appear.

title = ""

# Hero image (optional). Enter filename of an image in the `static/media/` folder.
hero_media = ""

[design.background]
# Apply a background color, gradient, or image.
#   Uncomment (by removing `#`) an option to apply it.
#   Choose a light or dark text color by setting `text_color_light`.
#   Any HTML color name or Hex value is valid.

# Background color.
# color = "navy"

# Background gradient.
#gradient_start = "#4bb4e3"
#gradient_end = "#2b94c3"

# Background image.
# image = "einsenden/download-bg.png"  # Name of image in `static/media/`.
# image_darken = 0.6  # Darken the image? Range 0-1 where 0 is transparent and 1 is opaque.
# image_size = "cover"  #  Options are `cover` (default), `contain`, or `actual` size.
# image_position = "center"  # Options include `left`, `center` (default), or `right`.
# image_parallax = false  # Use a fun parallax-like fixed background effect? true/false

# Text color (true=light or false=dark).
# text_color_light = true

# Call to action links (optional).
#   Display link(s) by specifying a URL and label below. Icon is optional for `[cta]`.
#   Remove a link/note by deleting a cta/note block.

[design]
  columns= '1'

+++

<div class="atlasPlaceholder hidden">
  {{< figure src="zeckenatlas-statisch.png" caption="Statische Ansicht des Zecken-Atlas" numbered="false" >}}
</div>

<div class='tableauPlaceholder' id='viz1641920281779' style='position: relative'>

<object class='tableauViz'  style='display:none;'>
  <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' /> 
  <param name='embed_code_version' value='3' /> 
  <param name='path' value='shared&#47;9F6ZYWZH6' />
  <param name='name' value='Zepak-Zecken-Atlas&#47;Zecken-Atlas' />
  <param name='static_image' value='9F&#47;9F6ZYWZH6&#47;1.png' />
  <param name='tabs' value='no' />
  <param name='toolbar' value='yes' />
  <param name='animate_transition' value='yes' />
  <param name='display_static_image' value='yes' />
  <param name='display_spinner' value='yes' />
  <param name='display_overlay' value='yes' />
  <param name='display_count' value='yes' />
  <param name='language' value='de-DE' />
  <param name='filter' value='publish=yes' />
</object>

</div>                

<script type='text/javascript'>                    
var divElement = document.getElementById('viz1641920281779');                    
var vizElement = divElement.getElementsByTagName('object')[0];                    
if ( divElement.offsetWidth > 800 ) { 
  vizElement.style.width='1300px';
  vizElement.style.height='1000px';
} else if ( divElement.offsetWidth > 500 ) { 
  vizElement.style.width='1300px';
  vizElement.style.height='1000px';
} else { 
  vizElement.style.width='100%';
  vizElement.style.height='1527px';
}                     

var scriptElement = document.createElement('script');                    
scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';                    
vizElement.parentNode.insertBefore(scriptElement, vizElement);                

</script>
