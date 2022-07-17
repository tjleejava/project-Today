exports.getDateAndTime = () => {
    let today = new Date();

    let year = today.getFullYear();
    let month = ('0' + (today.getMonth() + 1)).slice(-2);
    let day = ('0' + today.getDate()).slice(-2);

    let hours = ('0' + today.getHours()).slice(-2); 
    let minutes = ('0' + today.getMinutes()).slice(-2);
    let seconds = ('0' + today.getSeconds()).slice(-2); 

    let date = year + '-' + month  + '-' + day + ' ' + hours + ':' + minutes  + ':' + seconds;

    return date;
};

exports.getPenaltyDate = (penaltyDate) => {
    let startday = new Date();
    let endDate = new Date(startday.setDate(startday.getDate() + parseInt(penaltyDate)));

    let year = endDate.getFullYear();
    let month = ('0' + (endDate.getMonth() + 1)).slice(-2);
    let day = ('0' + endDate.getDate()).slice(-2);

    let hours = ('0' + endDate.getHours()).slice(-2); 
    let minutes = ('0' + endDate.getMinutes()).slice(-2);
    let seconds = ('0' + endDate.getSeconds()).slice(-2); 

    let date = year + '-' + month  + '-' + day + ' ' + hours + ':' + minutes  + ':' + seconds;

    return date;
};
exports.getPassedDate = (startDate) => {

  let date1 = new Date().getTime();
  
  let date2 = new Date(startDate).getTime();
  const passedDate = Math.floor((date1 - date2) / 1000 / 60 / 60 / 24) + 1 ;
  
  return passedDate;
};
