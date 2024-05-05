import React from 'react'
import promo_logo from './applesource/promo_logo_wwdc23__gcsmmrgbhlme_large_2x.png'
function Section5() {
  return (
    <div>
          <section class="fourth-section">
                <div class="fourth-wrapper1">
                    <div class="fourth-wrapper1-descrption">
                        <div><img src= {promo_logo} alt=""/></div><br/>
                        <div class="worldwide">Apple Worldwide Developers Conference. <br/> Join us online June </div><br/>
                        <div><a href="">learn more</a></div><br/>
                        </div>
                    </div>

                    <div class="fourth-wrapper2">
                        <div class="fourth-wrapper2-descrption">
                            <div><h1>iPad</h1></div><br/>
                            <div><h3>Lovable. Draweble. Magical</h3></div><br/>
                            <div class="learn-buy">
                                <ul>
                                    <li><a href="">learn more</a></li>
                                    <li><a href="">Buy</a></li>
                                </ul>
                        </div>
                    </div>
                </div> 
            </section>
    </div>
  )
}

export default Section5