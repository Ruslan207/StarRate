var lastvote=0,
    cov=0, rating=0; //cov-Count Of Votes

function get(s)
{
  return document.getElementById(s);
}

function mouseenter(e)
{
  var div=e.target || get(e);
  var number=div.id.replace("star",""); 
  for (var i=1; i<=number; i++)
    get("star"+i).className='starhover';
  for (i=parseInt(number,10)+1; i<=5; i++)   
    if (i>lastvote)
      get("star"+i).className='star';
    else
      get("star"+i).className='starvoted';
}

function mouseout()
{
  for (var i=1; i<=5; i++)
  {
    if (i>lastvote)
      get("star"+i).className='star';
    else
      get("star"+i).className='starvoted';
  }
}

function vote(s)
{
  var star=s.target;
  lastvote=star.id.replace("star","");
  rating*=cov;
  rating+=parseInt(lastvote);
  cov++;
  rating/=cov;
  rating=parseFloat(rating.toFixed(2),10);
  lastvote=Math.round(rating);
  switch (lastvote)
 {
    case 1: get("rating").innerHTML="Bad"; break;
    case 3: get("rating").innerHTML="Normal"; break;
    case 5: get("rating").innerHTML="Good"; break;
    default: get("rating").innerHTML=rating;        
  }
  mouseenter(star.id);
  get("votes").innerHTML=cov+" votes";
}

window.addEventListener("load",
  function load()
  {
    for (var i=1; i<=5; i++)
    {
      get('star'+i).addEventListener('mouseover',mouseenter);  
      get('star'+i).addEventListener('click',vote);
    }
  })