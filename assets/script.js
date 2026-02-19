document.querySelectorAll('.menu-toggle').forEach((btn) => {
  btn.addEventListener('click', () => {
    const nav = btn.parentElement.querySelector('nav');
    nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', nav.classList.contains('open') ? 'true' : 'false');
  });
});

document.addEventListener('click', (event) => {
  document.querySelectorAll('.nav-wrap').forEach((wrap) => {
    const nav = wrap.querySelector('nav');
    const btn = wrap.querySelector('.menu-toggle');
    if (!nav || !btn) return;
    if (window.innerWidth > 760) return;
    if (!wrap.contains(event.target)) {
      nav.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    }
document.querySelectorAll('.menu-toggle').forEach(btn => {
  btn.addEventListener('click', () => {
    const nav = btn.parentElement.querySelector('nav');
    nav.classList.toggle('open');
  });
});

const calculator = document.getElementById('impact-calculator');
if (calculator) {
  calculator.addEventListener('submit', (e) => {
    e.preventDefault();
    const amount = Number(document.getElementById('purchaseAmount').value || 0);
    const nhi = Math.round(amount * 0.6 * 100) / 100;
    const ops = Math.round(amount * 0.4 * 100) / 100;
    document.getElementById('impactResult').textContent = `Estimated allocation: $${nhi} to NHI partners and $${ops} to operations.`;
  });
}
