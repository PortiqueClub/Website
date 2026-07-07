<template>
<div class="relative">
  <div class="flex flex-col min-h-screen bg-yellow-light">
    <ReopeningBanner />

    <TheHeader />

    <main class="bg-blue-dark">
      <div class="flex flex-col items-center">
        <ActivitySection />
        <Activities />
        <Schedule />
        <Needs />
        <Pricings />
        <History />
        <Map />
      </div>
    </main>

    <TheFooter />
  </div>
</div>
</template>
