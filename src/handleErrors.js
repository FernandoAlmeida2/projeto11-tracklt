export default function handleErrors(err) {
    switch(err.status){
      case 422:
        alert("Os campos não podem estar vazios!");
        break;
      default:
        alert(err.data.message);
    }
  }