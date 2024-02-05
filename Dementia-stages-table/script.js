

//pop up script

const window_pop= document.getElementById('popup_display'); 


/* This function is added 'onclick' in the html. alternate way of doing this is doing it by an addEventlistener 
click function and therefore not needed to insert in html. but if you have several lines of code this is definately cleaner. */

function open_pop() {

  if(window_pop.style.display = 'none') {

    window_pop.style.display = 'block';
  }  

}

function close_pop() {

  if(window_pop.style.display = 'block'){

    window_pop.style.display = 'none';
  }
}


// when clicking outside the iframe the popup closes. But should still be clicking on the element
//The target event property returns the element that triggered the event.

  window.addEventListener('click', function(event) {

    if (event.target == window_pop) {

      window_pop.style.display = 'none';

    }

  })



  const sections = document.getElementsByTagName('section');
    
  function section_display_none() {
  
  for (var i = 0; i < sections.length; i++) {
    
    sections[i].style.display = 'none';
    
  }
    
}




  /* insert json into onclick Read More buttons. you need to turn your computer into a local host using python
  https://developer.mozilla.org/en-US/docs/Learn/Common_questions/set_up_a_local_testing_server */

  var jsonfile = '';


  function content(jsonfile) {
   
   fetch(jsonfile)
  
   .then (response => response.json())
   
   .then(data => {
  
    //console log is just for testing if you do not see anything appear on the actual web page

   console.log(data.subhead_01);
  
   console.log(data.text_01);

   
   document.querySelector('#int_00').textContent = data.intro_00;
   
     
   document.querySelector('#sh_01').textContent = data.subhead_01;
   
   document.querySelector('#txt_01').textContent = data.text_01;
  
      
   document.querySelector('#sh_02').textContent = data.subhead_02;
   
   document.querySelector('#txt_02').textContent = data.text_02;
  
    
   document.querySelector('#sh_03').textContent = data.subhead_03;
  
   document.querySelector('#txt_03').textContent = data.text_03;
  
    
   document.querySelector('#sh_04').textContent = data.subhead_04;
  
   document.querySelector('#txt_04').textContent = data.text_04;

    
  })
  
  }


  function readmore_memory() {

    section_display_none();
  
    sections[0].style.display ='inline';
   
    sections[1].style.display = 'inline';
   
    sections[2].style.display = 'inline';
  
    sections[3].style.display = 'inline';
  
    content('memory.json');
  
  }


  function readmore_speech() {

    section_display_none();
  
    sections[1].style.display ='inline';
  
    content('speech.json');
  
  }


  function readmore_physical() {

    section_display_none();
  
    sections[1].style.display ='inline';
   
    sections[2].style.display = 'inline';
   
    sections[3].style.display = 'inline';
  
    content('physical.json');
  }

  function readmore_behaviour() {

    section_display_none();
  
    sections[0].style.display ='inline';
   
    sections[1].style.display = 'inline';
  
    content('behaviour.json');
  }


  function readmore_emotion() {

    section_display_none();
  
    sections[1].style.display ='inline';
  
    content('emotion.json');
  }