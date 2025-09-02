<template>
  <div class="shimmer-wrapper">
    <div class="shimmer-card">
      <div class="shimmer-image"></div>
      <div class="shimmer-content">
        <div class="shimmer-title"></div>
        <div class="shimmer-location"></div>
        <div class="shimmer-acv"></div>
        <div class="shimmer-info"></div>
        <div class="shimmer-buttons"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.shimmer-wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
}

.shimmer-card {
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  width: 250px;
  height: 435px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.shimmer-image {
  height: 224px;
  width: 100%;
  background: #f6f7f8;
  background-image: linear-gradient(90deg, #f6f7f8 0%, #edeef1 50%, #f6f7f8 100%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
}

.shimmer-content {
  padding: 16px;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.shimmer-title {
  height: 24px;
  width: 80%;
  background: #f6f7f8;
  background-image: linear-gradient(90deg, #f6f7f8 0%, #edeef1 50%, #f6f7f8 100%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
  border-radius: 4px;
}

.shimmer-location, .shimmer-acv, .shimmer-info {
  height: 16px;
  width: 60%;
  background: #f6f7f8;
  background-image: linear-gradient(90deg, #f6f7f8 0%, #edeef1 50%, #f6f7f8 100%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
  border-radius: 4px;
}

.shimmer-buttons {
  display: flex;
  justify-content: space-between;
  margin-top: auto;
}

.shimmer-buttons div {
  height: 32px;
  width: 40%;
  background: #f6f7f8;
  background-image: linear-gradient(90deg, #f6f7f8 0%, #edeef1 50%, #f6f7f8 100%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
  border-radius: 4px;
}

@keyframes shimmer {
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
}
</style>
