import React from 'react';
import './ResultList.css';


const titleStyle = {
  color: 'blue',
  fontWeight: 'bold'

};

const ResultList = (props) => {

  const images = props.results.map((result) => {
    return (
      <div key={result.trackId}>   {/* לא מפתח לגמרי יוניקי אז עדיין תיהיה אזהרה בקונסול מה לעשות*/}
        <img alt={result.trackName} src={result.artworkUrl100} />
        <br />
        <a href={result.trackViewUrl} >
        <span style={{fontSize: '2.5vh',color:'black'}}>{result.trackCensoredName}</span>
        </a>
        <br />
        <span style={titleStyle}>Artist Name:</span> {result.artistName}
        <br />
        <br />
        <span style={titleStyle}>Description:</span> {result.shortDescription}
        <br />


          <video width="200" height="150" controls>
          <source src={result.previewUrl} type="video/mp4" />
          </video>
{/* אני יודע שזו דרך גרועה ואני צריך ליצור קומפוננטה בשביל הסירטון שאני כרגע רוצה להפעיל בלחיצה
  כדי שזה לא יטען את כולם בטעינת הדף כמו שזה עכשיו אבל מפאת זמן יש חוסרים*/}


      </div>
    );

  });

  console.log(props.results);
  return <div className="result-list"> {images} </div>;

};

export default ResultList;
