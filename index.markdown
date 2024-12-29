---
layout: default
title: Calcul du salaire brut en net
---

<div class="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
  <h1 class="text-3xl font-semibold text-center text-gray-800 mb-6">Calcul du salaire brut en net</h1>

  <!-- Input section -->
  <div class="mb-6">
    <label for="horaireBrut" class="block text-lg font-medium text-gray-700">Horaire Brut (Gross Hourly Rate):</label>
    <input type="number" id="horaireBrut" value="1000" class="mt-2 p-2 border border-gray-300 rounded w-full" />
  </div>

  <!-- Results section -->
  <div class="space-y-4">
    <div>
      <p class="text-lg text-gray-700">Horaire Net: <span id="horaireNet" class="font-bold"></span></p>
    </div>
    <div>
      <p class="text-lg text-gray-700">Mensuel Brut: <span id="mensuelBrut" class="font-bold"></span></p>
    </div>
    <div>
      <p class="text-lg text-gray-700">Mensuel Net: <span id="mensuelNet" class="font-bold"></span></p>
    </div>
    <div>
      <p class="text-lg text-gray-700">Annuel Brut: <span id="annuelBrut" class="font-bold"></span></p>
    </div>
    <div>
      <p class="text-lg text-gray-700">Annuel Net: <span id="annuelNet" class="font-bold"></span></p>
    </div>
    <div>
      <p class="text-lg text-gray-700">Mensuel Net après Impôts (40%): <span id="mensuelNetImpot" class="font-bold"></span></p>
    </div>
    <div>
      <p class="text-lg text-gray-700">Annuel Net après Impôts (40%): <span id="annuelNetImpot" class="font-bold"></span></p>
    </div>
  </div>
</div>