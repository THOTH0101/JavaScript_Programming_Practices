function handleCostKeydown(event) {
    if (event.key === 'Enter') {
      calculateTotal();
    }
  }

  function calculateTotal() {
    const innerElement = document.querySelector('.js-cost-input');
    let cost = Number(innerElement.value);

    console.log(cost);

    if (cost < 0) {
      const result = document.querySelector('.js-total-cost');

      result.classList.add('result-error');

      result.innerHTML = 'Error: cost cannot be less $0';
    } else {
      if (cost < 40) {
        cost = (cost * 100 + 1000) / 100;
      }

      const result = document.querySelector('.js-total-cost');
      result.classList.remove('result-error');
      result.innerHTML = `$${cost}`;
    }
  }

  function subscribe() {
    const buttonElement = document.querySelector('.js-subscribe-button');

    if (buttonElement.innerText === 'Subscribe') {
      buttonElement.innerHTML = 'Subscribed';
      buttonElement.classList.add('is-subscribed-button');
    } else {
      buttonElement.innerHTML = 'Subscribe';
      buttonElement.classList.remove('is-subscribed-button');
    }
}