// Aurora background effect logic will go here
document.addEventListener('DOMContentLoaded', () => {
  console.log('Aurora effect script loaded.');

  // Check if running on a touch device, if so, do not run the animation
  if ('ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0) {
    console.log('Touch device detected, aurora effect disabled.');
    return;
  }

  const body = document.body;
  const auroraContainer = document.createElement('div');
  auroraContainer.id = 'aurora-background-container';
  body.insertBefore(auroraContainer, body.firstChild); // Insert as the first child of body


  let globalAnimationFrameId = null;
  const globalAnimate = () => {
    // Manually update individual positions (this is what their internal animate would do)
    const updatePos = (p, t, s) => {
      const dx = t.x - p.currentPos.x;
      const dy = t.y - p.currentPos.y;
      p.currentPos.x += dx * s;
      p.currentPos.y += dy * s;
    };

    // Need to expose target and currentPos from useSmoothMousePosition or refactor
    // This current structure is problematic for a single update loop.

    // For now, let's stick to the original React example's structure where each pos updates independently
    // and the style is set using their current values. The provided JS code has each pos updating its own x,y
    // and the main component re-renders, re-calculating the style.
    // In vanilla JS, we need one central place to update the style.

    // Let's simplify: the animate function in the *first* created smoother will update the background.
    // This is not ideal but will work for a demo.

    // Re-init with a flag or a different structure.
    // For now, the first `animate` call in `useSmoothMousePosition` will handle the background update.
    // This means `pos1`, `pos2`, `pos3` need to be accessible globally or passed around.

    // The current structure where each useSmoothMousePosition has its own animate loop
    // and updates a shared `auroraContainer.style.background` will lead to multiple writes per frame.
    // It's better to have one animation loop that reads all positions and writes the style once.

    // Let's try to make pos1, pos2, pos3 simple objects updated by their respective smoothers,
    // and a single animation loop for the background.

    if (!window.pos1 || !window.pos2 || !window.pos3) {
      console.error('pos1, pos2, or pos3 is not defined on window yet.');
      globalAnimationFrameId = requestAnimationFrame(globalAnimate);
      return;
    }

    console.log(`Aurora animating: pos1=(${window.pos1.x.toFixed(2)}, ${window.pos1.y.toFixed(2)}), pos2=(${window.pos2.x.toFixed(2)}, ${window.pos2.y.toFixed(2)}), pos3=(${window.pos3.x.toFixed(2)}, ${window.pos3.y.toFixed(2)})`);

    auroraContainer.style.background = `
      radial-gradient(400px circle at ${window.pos1.x.toFixed(2)}px ${window.pos1.y.toFixed(2)}px, rgba(255, 0, 0, 0.3), transparent 70%),
      radial-gradient(600px circle at ${window.pos2.x.toFixed(2)}px ${window.pos2.y.toFixed(2)}px, rgba(255, 50, 50, 0.2), transparent 70%),
      radial-gradient(800px circle at ${window.pos3.x.toFixed(2)}px ${window.pos3.y.toFixed(2)}px, rgba(255, 100, 100, 0.1), transparent 70%)
    `;
    globalAnimationFrameId = requestAnimationFrame(globalAnimate);
  };

  // Restart the individual smoothers without them updating the DOM directly
  // The `useSmoothMousePosition` needs to be refactored to not update DOM, just calculate position.

  // --- Refactor useSmoothMousePosition ---
  const createSmoothMouseTracker = (smoothing = 0.1) => {
    let position = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    let target = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    let animationFrameId = null;

    const handleMouseMove = (event) => {
      target.x = event.clientX;
      target.y = event.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove); // Add listener once per tracker

    const animatePosition = () => {
      const dx = target.x - position.x;
      const dy = target.y - position.y;
      position.x += dx * smoothing;
      position.y += dy * smoothing;
      animationFrameId = requestAnimationFrame(animatePosition);
    };
    animatePosition(); // Start its own animation loop to update its internal position

    return {
      get x() { return position.x; },
      get y() { return position.y; },
      cleanup: () => {
        // Note: mousemove listener is global, consider how to manage if multiple trackers are stopped/started
        // For this case, it's fine as they all listen to the same event.
        if (animationFrameId) cancelAnimationFrame(animationFrameId);
      }
    };
  };

  window.pos1 = createSmoothMouseTracker(0.1);
  window.pos2 = createSmoothMouseTracker(0.06);
  window.pos3 = createSmoothMouseTracker(0.03);

  globalAnimate(); // Start the single global animation loop for background update

  // Clean up on window unload (optional, good practice)
  // Clean up on window unload (optional, good practice)
  window.addEventListener('beforeunload', () => {

    if (globalAnimationFrameId) cancelAnimationFrame(globalAnimationFrameId);
    if (window.pos1 && window.pos1.cleanup) window.pos1.cleanup();
    if (window.pos2 && window.pos2.cleanup) window.pos2.cleanup();
    if (window.pos3 && window.pos3.cleanup) window.pos3.cleanup();
    // Consider removing mousemove listeners too if they were added by individual trackers
    // and not globally. In createSmoothMouseTracker, it's added per tracker, but to window.
    // A single global mousemove listener that updates all targets would be more efficient.
  });



});
