document.addEventListener("DOMContentLoaded", () => {

  // ===== Lightbox 放大圖片 =====
  const images = document.querySelectorAll('.work-img, .hero-img');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const closeBtn = document.querySelector('.close');

  if(lightbox && lightboxImg && closeBtn){
    images.forEach(img => {
      img.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        lightboxImg.src = img.src;
      });
    });

    closeBtn.addEventListener('click', () => lightbox.style.display = 'none');

    lightbox.addEventListener('click', (e) => {
      if(e.target === lightbox) lightbox.style.display = 'none';
    });
  }

  // ===== 滑鼠 / 觸控藍色愛心 =====
  const createHeart = (x, y) => {
    const heart = document.createElement("span");
    heart.classList.add("mouse-star");
    heart.textContent = "💙";           // 藍色愛心
    heart.style.left = x + "px";
    heart.style.top = y + "px";
    heart.style.fontSize = "22px";
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 800);
  };

  let lastTime = 0;

  document.addEventListener("mousemove", (e) => {
    const now = Date.now();
    if(now - lastTime < 50) return;
    lastTime = now;
    createHeart(e.pageX, e.pageY);
  });

  document.addEventListener("touchmove", (e) => {
    const now = Date.now();
    if(now - lastTime < 50) return;
    lastTime = now;
    for(let touch of e.touches){
      createHeart(touch.pageX, touch.pageY);
    }
  });

});


const workImgs = document.querySelectorAll(".work-img");

workImgs.forEach(img => {
  img.addEventListener("mousemove", () => {
    img.style.transform = "scale(1.1)";
    img.style.boxShadow = "0 0 30px rgba(255, 245, 106, 1)";
  });

  img.addEventListener("mouseleave", () => {
    img.style.transform = "scale(1)";
    img.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";
  });
});

// ===== 卡片微光效果 =====
const cards = document.querySelectorAll(".work-card");

cards.forEach(card => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.3), transparent 80%)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.background = ""; // 回到原本背景
  });
});

document.addEventListener("mousemove", e => {
  let glow = document.getElementById("mouse-glow");
  if(!glow){
    glow = document.createElement("div");
    glow.id = "mouse-glow";
    document.body.appendChild(glow);
    Object.assign(glow.style, {
      position: "fixed",
      width: "120px",
      height: "120px",
      borderRadius: "50%",
      pointerEvents: "none",
      background: "radial-gradient(circle, rgba(0, 157, 255, 0.3) 0%, rgba(234, 245, 255, 0) 70%)",
      transform: "translate(-50%, -50%)",
      zIndex: 9999
    });
  }
  glow.style.left = e.clientX + "px";
  glow.style.top = e.clientY + "px";
});

setInterval(() => {
  const drop = document.createElement("span");
  drop.textContent = "💍"; // 可以換成文字或 emoji
  drop.style.position = "fixed";
  drop.style.left = Math.random()*window.innerWidth + "px";
  drop.style.top = "-30px";
  drop.style.fontSize = Math.random()*24 + 12 + "px";
  drop.style.opacity = Math.random();
  drop.style.pointerEvents = "none";
  document.body.appendChild(drop);

  let top = -30;
  const fall = setInterval(() => {
    top += 2;
    drop.style.top = top + "px";
    if(top > window.innerHeight) {
      drop.remove();
      clearInterval(fall);
    }
  }, 16);
}, 500);

const intro = document.querySelector("h3"); 
const text = intro.textContent;
intro.textContent = "";
let i = 0;
const typeInterval = setInterval(() => {
  intro.textContent += text[i];
  i++;
  if(i >= text.length) clearInterval(typeInterval);
}, 100);

document.body.style.opacity = 0;
document.body.style.transition = "opacity 1.5s ease-in";
window.addEventListener("load", () => {
  document.body.style.opacity = 1;
});

const title = document.querySelector("h1");
document.addEventListener("mousemove", (e) => {
  const centerX = window.innerWidth/2;
  const centerY = window.innerHeight/2;
  const dx = (e.clientX - centerX)/20;
  const dy = (e.clientY - centerY)/20;
  title.style.transform = `translate(${dx}px, ${dy}px)`;
});
