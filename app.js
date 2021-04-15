// console.log('hi');
alert ('Welcome to my site');

var userName= prompt ('Please enter your name');
console.log('user name');


var userAge=prompt ('Please enter your age');
if ( userAge >= 18){
   alert ('Welcome you can watch the movie ; Enjoy');
} else {
  alert ('sorry you can not watch the movie because it contains violent scenes');
}

var timeNow= prompt('What time is it now please');
if (timeNow >=12){
  document.write('Good morning, hero');
  document.write('<img src=https://image.freepik.com/free-vector/creative-good-morning-lettering-background_23-2148244893.jpg>');

  } else if (timeNow >=24){
  document.write('Good night hero');
  document.write ('img src=https://alnqsh-prod.s3.eu-central-1.amazonaws.com/4199/conversions/Good-Night-medium.jpg');

  }
  


var characterName = prompt('hello plz enter your fav char name from call move !');

while (characterName !== 'park' && characterName !== 'kim' )
{
  characterName = prompt (' plz enter the character Name park or kim')
}

var userPhoto;

if (characterName === 'park' ){
userPhoto='<img src="https://www.asiaholic.net/wp-content/uploads/2015/01/rsz_park-shin-hye.jpg">';
} else if (characterName === 'kim'){
userPhoto='<img src="https://upload.wikimedia.org/wikipedia/commons/1/10/Oh_Se-hun_-_2016_Gaon_Chart_K-pop_Awards_red_carpet.jpg">';
  
}


var imagesNumber = prompt ('how many image do you want?');

for (var i=0 ; i < imagesNumber ; i++ ){
  document.write(userPhoto);
}
