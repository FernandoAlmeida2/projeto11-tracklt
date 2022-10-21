export default function handleErrors(err) {
    switch(err.status){
      case 422:
        const field = err.data.details[0].split("\"");
        alert(`O campo ${translate(field[1])} está vazio ou no formato incorreto!`);
        break;
      default:
        alert(err.data.message);
    }
  }

  function translate(word){
    switch(word){
      case 'name':
        return 'nome'
      case 'email':
        return 'e-mail'
      case 'password':
        return 'senha'
      case 'image':
        return 'foto'
      default:
        return ''
    }
  }