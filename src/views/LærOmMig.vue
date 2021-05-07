<template>
<v-content>
 <div class="staticHero">
<v-img width="1900px" height="600px" src="../assets/images/eldinLærOmMig.png">
  <v-row align="end" class="lightbox white--text pa-2 fill-height">
    <v-col>
      <v-container>
      <div class="headline"><h1>Lær mig bedre at kende</h1></div>
      </v-container>
    </v-col>
  </v-row>
</v-img>
 </div>
 <div class="block">
   <v-container text-center>
    <p>Mit navn er Eldin Colic og jeg er 23 år gammel. Mine rødder er fra Bosnien, det tidligere Jugoslavien.
      Jeg er født og opvokset i Danmark. Til dagligt læser jeg til Multimediedesigner på Erhvervsakademiet Sydvest i Esbjerg.
      Som deltid arbejder i Yousee inde i Broen Shoppingcentret som salgskonsulet, hvor jeg servicerer kunder og 
      har en masse dejlige dialoger med kunderne.</p>

      <p>Min fritid bruger jeg på fitness og fodbold samt venner og familie. Jeg prøver så vidt som muligt, at kombinere fitness og fodbold 
        med min familie og venner, så jeg når omkring alle. Igennem mit arbejde har jeg fået en masse erfaring, som jeg vil komme nærmere ind på
        i mit CV. Du kan her under downloade og se både mit CV og business card.
      </p>
       </v-container>
 </div>
 <div class="block">
   <v-container>
     <h2 class="text-center">Curriculum vitae</h2>
  <div class="text-center">
<div class="video-container">
          <iframe
            width="60%" height="500"
            src="https://www.youtube.com/embed/_LT3_MS2Xvc"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
</div>
</div>


   </v-container>
<br>
  <h3 class="text-center">Nedenstående er mit CV samt mit visitkort i billedeformat. Klik på billederne for at download som PDF-fil</h3> 

<v-container
    class="fill-height"
    fluid
    style="min-height: 600px"
  >
    <v-fade-transition mode="out-in">
      <v-row>
        <v-col cols="6">
          <v-card>
            <v-img
              src="../assets/images/cvpersonal.png"
              height="400"
              width="600"
              align-item="center"
              class="grey darken-4"
            ></v-img>
            <v-card-title class="title">
              <a href="/files/cvpersonal.pdf" target="_blank"><button class="btn">Download CV</button></a>
            </v-card-title>
          </v-card>
        </v-col>

        <v-col cols="6">
          <v-card>
            <v-img
              src ="../assets/images/bizcard.png"
              height="400"
              class="grey darken-4"
            ></v-img>
            <v-card-title class="title">
              <a href="/files/bizcard.pdf" target="_blank"><button class="btn">Download Business Card</button></a>
            </v-card-title>
          </v-card>
        </v-col>

        
      </v-row>
    </v-fade-transition>
  </v-container>

 </div>
</v-content>
</template>

<script>
export default {
  name: "LærOmMig",

  data() {
    return { videoId: "_LT3_MS2Xvc", items: [] };
  },
};
</script>

