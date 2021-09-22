+++

widget = "hero"  # See https://wowchemy.com/docs/page-builder/
headless = true  # This file represents a page section.
weight = 10  # Order that this section will appear
active = true

title = "Deutschlands neuer Zecken-Atlas"

hero_media = "logo_zepak.png"

[design.background]
# Apply a background color, gradient, or image.
#   Uncomment (by removing `#`) an option to apply it.
#   Choose a light or dark text color by setting `text_color_light`.
#   Any HTML color name or Hex value is valid.

# Background color.
 color = "white"

# Background gradient.
# gradient_start = "#4bb4e3"
# gradient_end = "#5895"

# Background image.
# image = ""  # Name of image in `static/media/`.
# image_darken = 0.6  # Darken the image? Range 0-1 where 0 is transparent and 1 is opaque.
# image_size = "cover"  #  Options are `cover` (default), `contain`, or `actual` size.
# image_position = "center"  # Options include `left`, `center` (default), or `right`.
# image_parallax = true  # Use a fun parallax-like fixed background effect? true/false

# Text color (true=light or false=dark).
# text_color_light = true

+++

<!-- Modal -->
<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalCenterTitle">Hinweis zur Nutzung personenbezogener Daten</h5>
      </div>
      <div class="modal-body">
        Für die Ansicht des Zecken-Atlas sind <b>keine personenbezogenen Daten</b> notwendig. Wir verwenden zur
        Visualisierung die Software Tableau, dessen Hersteller seinen Sitz in den USA hat.<br>
        <p>Wir sind bemüht, ausschließlich Server in der EU zu verwenden, können aber nicht hundertprozentig ausschließen,
        dass z.B. IP-Adressen automatisch auch an Server in den USA weitergeleitet werden.</br>
        <p>Da wir gleichwohl nicht gewährleisten können, dass in den USA ein der EU gleichrangiges Datenschutzniveau herrscht,
        bitten wir Sie zur Nutzung unseres Services um Ihre ausdrückliche Einwilligung.
        Aufgrund des dortigen Rechts besteht das Risiko, dass Netzwerkadressen von US-Behörden erfasst und analysiert und
        dass Betroffenenrechte nach EU-Recht nicht vollumfänglich durchgesetzt werden können.</br>
        <p>Ihre <b>Einwilligung ist freiwillig</b> und jederzeit widerrufbar, allerdings können Sie bei Nichterteilung oder Widerruf
        der Einwilligung den Zecken-Atlas nicht nutzen.
      </div>
      <div class="modal-footer">
        <button type="button" id="atlas-no" class="btn btn-secondary" data-dismiss="modal">Ich willige nicht ein.</button>
        <button type="button" id="atlas-yes" class="btn btn-primary" data-dismiss="modal">Ja, ich willige ein.</button>
      </div>
    </div>
  </div>
</div>

Das Robert Koch-Institut sammelt seit vielen Jahren regelmäßig Zecken und untersucht sie auf Krankheiten.
Wo wir welche Zecken mit welchen Krankheiten gefunden haben, können Sie auf dem Zecken-Atlas sehen. 

**Sie können den Zecken-Atlas mitgestalten!**

## Machen auch Sie mit: Senden Sie uns gefundene Zecken

Wie das genau geht, erfahren Sie auf der Seite [Zecke einsenden](../einsenden). Ihre
gefundenen Zecken werden untersucht und in unserer Datenbank gespeichert. Sie sind dann hier im Zecken-Atlas sichtbar.
Wenn Sie wünschen, sogar mit Ihrem selbstgewählten Spitznamen. 
