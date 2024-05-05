import React from 'react'
import Hero from './applesource/hero_logo_apple_watch_series_8__ezarmmoobhg2_small_2x.png'
function Section3() {
  return (
    <div>
         <section class="third-section">
            <div class="third-wrapper">
                <div class="watch"><img src = {Hero}/></div>
                <div class="healthy-leap">A healthy leap ahead</div>
                <div class="learn-buy">
                    <ul>
                        <li><a href="">learn more</a></li>
                        <li><a href="">buy</a></li>
                    </ul>
                </div>
             </div> 
        </section>
    </div>
  )
}

export default Section3