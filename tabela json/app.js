const tbody = document.querySelector('tbody');


// Replace ./data.json with your JSON feed
fetch('data.json')
  .then(response => {
    return response.json()
  })
  .then(data => {
    
    data.forEach((dados) => {

        console.log(typeof dados);
      //  console.log(Object.keys(dados).length);
      

        let tr = document.createElement('tr');
        
        /*let td1 = document.createElement('td');
        let td2 = document.createElement('td');
        let td3 = document.createElement('td');
        let td4 = document.createElement('td');

        td1.textContent = dados.index;
        td2.textContent = dados.balance;
        td3.textContent = dados.age;
        td4.textContent = dados.company;

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
       */ 

        var cells =  Object.keys(dados).map(item => 
            
                '<td>' + dados.index + '</td>' +
                '<td>' + dados.balance + '</td>' +
                '<td>' + dados.age + '</td>' +
                '<td>' + dados.company + '</td>' 

            );

      tr.innerHTML = cells.join('');

        tbody.appendChild(tr);


    })

    

  })
  .catch(e => {
    console.error("Critical failure: " + e.message)
  })




  function createCells(cell){
      var rows = `<td>${cell.index}</td>
                 <td>${cell.balance}</td>
                 <td>${cell.age}</td>
                 <td>${cell.company}</td>
      `;

      return rows.join('');
  }