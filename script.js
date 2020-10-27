const Speed = 4;
        const car = document.getElementById("car");
        const doroga = document.getElementById("doroga");
        const destanX = doroga.width / 2 - car.width / 2 - 3;
        const destanY = 0;
			function gonka() {
				const carY = car.getClientRects()[0].top;
				const carX = car.getClientRects()[0].left;
					if (carX !== destanX || carY !== destanY) {
						let dtX = (Math.abs(destanX - carX) > Speed) ? Speed : Math.abs(destanX - carX);
						let dtY = (destanY - carY < Speed) ? Speed : destanY + carY;
						car.style.left = destanX < carX ? carX - dtX : carX + dtX;
						car.style.top = carY - dtY;
						setTimeout(gonka, 20);
					}
					
			}