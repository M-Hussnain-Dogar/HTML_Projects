    // Add numbers dynamically
    const clock = document.getElementById('clock');
    for (let i = 1; i <= 12; i++) {
      const angle = (i * 30) * Math.PI / 180;
      const radius = 110;
      const x = 130 + radius * Math.sin(angle);
      const y = 130 - radius * Math.cos(angle);
      const number = document.createElement('div');
      number.className = 'number';
      number.style.left = `${x}px`;
      number.style.top = `${y}px`;
      number.textContent = i;
      clock.appendChild(number);
    }

    function updateClocks() {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const seconds = now.getSeconds();

      const hourDeg = (hours % 12) * 30 + minutes * 0.5;
      const minuteDeg = minutes * 6 + seconds * 0.1;
      const secondDeg = seconds * 6;

      document.getElementById("hour-hand").style.transform = `rotate(${hourDeg}deg)`;
      document.getElementById("minute-hand").style.transform = `rotate(${minuteDeg}deg)`;
      document.getElementById("second-hand").style.transform = `rotate(${secondDeg}deg)`;

      const padded = n => String(n).padStart(2, '0');
      document.getElementById("digital-clock").textContent =
        `${padded(hours)}:${padded(minutes)}:${padded(seconds)}`;
    }

    setInterval(updateClocks, 1000);
    updateClocks();