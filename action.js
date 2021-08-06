let lessonCompleted=0, totalLesson=0;
let jsLessonCompleted=0, jsTotalLesson=100;
let reactLessonCompleted=0, reactTotalLesson=100;
let njsLessonCompleted=0, njsTotalLesson= 100;
let expjsLessonCompleted=0, expjsTotalLesson= 100;
let mdbLessonCompleted=0, mdbTotalLesson= 100;
let gitLessonCompleted=0, gitTotalLesson= 100;




function plusjs(pre){
  if(jsLessonCompleted<jsTotalLesson){
    jsLessonCompleted++;
    lessonCompleted = jsLessonCompleted;
    totalLesson = jsTotalLesson;
    plus(pre);
  }
}



function plusreact(pre){
  if(reactLessonCompleted<reactTotalLesson){
    reactLessonCompleted++;
    lessonCompleted = reactLessonCompleted;
    totalLesson = reactTotalLesson;
    plus(pre);
  }
}


function plusnjs(pre){
  if(njsLessonCompleted<njsTotalLesson){
    njsLessonCompleted++;
    lessonCompleted = njsLessonCompleted;
    totalLesson = njsTotalLesson;
    plus(pre);
  }
}


function plusexpjs(pre){
  if(expjsLessonCompleted<expjsTotalLesson){
    expjsLessonCompleted++;
    lessonCompleted = expjsLessonCompleted;
    totalLesson = expjsTotalLesson;
    plus(pre);
  }
}


function plusmdb(pre){
  if(mdbLessonCompleted<mdbTotalLesson){
    mdbLessonCompleted++;
    lessonCompleted = mdbLessonCompleted;
    totalLesson = mdbTotalLesson;
    plus(pre);
  }
}


function plusgit(pre){
  if(gitLessonCompleted<gitTotalLesson){
    gitLessonCompleted++;
    lessonCompleted = gitLessonCompleted;
    totalLesson = gitTotalLesson;
    plus(pre);
  }
}




function plus(pre){

  let percent, lesson;
  let var1 = ".les" + pre, var2= ".per"+ pre;
  lesson = document.querySelector(var1);
  percent = document.querySelector(var2);

  const x =  (lessonCompleted) + " / " + totalLesson;                           // change text of lesson and percentage
  lesson.innerHTML=x;
  let cur_per = Math.floor(((lessonCompleted)/totalLesson)*100);
  const y = cur_per + "%";
  percent.innerHTML = y;

  let var3 = pre + "LessoninLS", var4 = pre + "PercentinLS",  var5 = pre + "LessonNumber";
  let prev_per = parseInt(localStorage.getItem(var4));

  for(let i=prev_per;i<cur_per;i++){
      document.getElementsByClassName(pre)[i].classList.add("colors");
  }

  localStorage.setItem(var3, x);                                                // keep a record of changes in LS
  localStorage.setItem(var4, cur_per);
  localStorage.setItem(var5, lessonCompleted);
}




function justLoaded(){

    let ary = ["js", "react", "njs", "expjs", "mdb", "git"];

    for(let x=0; x<6; x++){
      let pre = ary[x];

      let var1 = pre + "LessoninLS", var2 = pre + "PercentinLS", var3 = pre + "LessonNumber";
      let a = localStorage.getItem(var1);                    //retrives the recorded data from LS
      let b = parseInt(localStorage.getItem(var2));

      let var4 = ".les" + pre, var5= ".per"+ pre;
      document.querySelector(var4).innerHTML = a ;         // shows the retrived text of lesson and percentage
      if(b==0)document.querySelector(var5).innerHTML = b ;
      else{
         document.querySelector(var5).innerHTML = b + "%" ;
      }

      for(let i=0;i<b;i++){
        document.getElementsByClassName(pre)[i].classList.add("colors");   // changes the color to green according to the retrived data
      }

      if(x==0) jsLessonCompleted = parseInt(localStorage.getItem(var3));
      else if(x==1) reactLessonCompleted = parseInt(localStorage.getItem(var3));
      else if(x==2) njsLessonCompleted = parseInt(localStorage.getItem(var3));
      else if(x==3) expjsLessonCompleted = parseInt(localStorage.getItem(var3));
      else if(x==4) mdbLessonCompleted = parseInt(localStorage.getItem(var3));
      else if(x==5) gitLessonCompleted = parseInt(localStorage.getItem(var3));
    }

}




function reset(pre){
  let var1 = pre + "LessoninLS", var2 = pre + "PercentinLS", var3 = pre + "LessonNumber";
  localStorage.setItem(var1, 0);            //resets all data from LS for a particular progress bar
  localStorage.setItem(var2, 0);
  localStorage.setItem(var3, 0);
}












// ends of javascript
