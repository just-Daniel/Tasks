const ALLOWED_STATUSES = ['AWAITING', 'UPLOADED_OK'];

const followUpDocuments = {
 beforeTravel: {
   visaVignette: {
     'visaVignette-1': {
       status: 'REJECTED',
       toDate: 1606067035837,
       fromDate: 1580665435837
     },
     'visaVignette-2': {
       status: 'UPLOADED_OK',
       toDate: 1606067035837,
       fromDate: 1580665435837
     }
   },
   brp: {
     'brp-1': {
       status: 'REJECTED',
       toDate: 1606067035837,
       fromDate: 1580665435837
     }
   }
 },
 afterArrival: {
   stampedVisaVignette: {},
   travelTicket: {
     'travelTicket-1': {
       status: 'REJECTED',
       fromDate: 1580665435837
     },
     'travelTicket-2': {
       status: 'AWAITING',
       toDate: 1606067035837
     },
     'travelTicket-3': {
       status: 'UPLOADED_OK',
       toDate: 1618858984887,
       fromDate: 1580665435837
    }
   }
 },
 complete: false,
 another: false
};
 

const calculateDays = (followUpDocuments) => {
  let totalDays = 0;

  const object = cleanUpCompleteAndAnother(followUpDocuments);

  for(let firstIt in object) {

    Object.entries(object[firstIt]).forEach(([ , value]) => { 

      for(let item in value) {
        let data = value[item];
        let checkStatus = ALLOWED_STATUSES.includes(data.status);

        if (checkStatus && data.toDate && data.fromDate) {
          let daysDifference = Math.floor((data.toDate - data.fromDate)/1000/60/60/24);
          
          totalDays += daysDifference
        }
      }

    });

  }
  return totalDays;
}

const cleanUpCompleteAndAnother = (obj) => {
    return Object.fromEntries(
        Object.entries(obj)
        .filter(([key]) => !['complete', 'another'].includes(key))
      )
}

console.log('function: ', calculateDays(followUpDocuments));
   
     // 1) пробігтися по всім полям followUpDocuments окрім "complete" і "another",
    // beforeTravel, afterArrival можна ще добавити хоть 10 таких (з іншими назвами)
    
    // 2) Note: ALLOWED_STATUSES - якщо вашого статусу там немає то не потрібно обраховувати
    // якщо 'toDate' або 'fromDate' відсутні - не потрібно обраховувати
    

   // 3) beforeTravel, afterArrival - в середині мають ще секції (visaVignette, brp, stampedVisaVignette, travelTicket)
    // які в середині ще мають ('visaVignette-1', 'visaVignette-2')
    // так от 'visaVignette-1' має поля 'toDate' і 'fromDate' - потрібно дізнатися скільки днів між цими датами і добавити їх до 'totalDays'
    // так потрібно зробити із всіма вкладеними обєктами як є і можуть бути