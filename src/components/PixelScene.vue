<template>
  <svg
    class="pixel-scene-inline"
    :class="`pixel-scene-${scene}`"
    viewBox="0 0 64 64"
    width="64"
    height="64"
    shape-rendering="crispEdges"
    aria-hidden="true"
  >
    <!-- Profile: running pixel QA robot. -->
    <g v-if="scene === 'profile'" fill="#0F766E">
      <g class="pixel-robot-body">
        <rect x="20" y="24" width="24" height="24" fill-opacity=".45"/>
        <rect x="24" y="14" width="16" height="12" fill-opacity=".38"/>
        <rect x="30" y="8" width="4" height="6" fill-opacity=".42"/>
        <rect x="28" y="6" width="8" height="2" fill-opacity=".42"/>
        <rect x="27" y="18" width="4" height="4" fill="#6EE7B7" class="pixel-pulse pixel-pop"/>
        <rect x="33" y="18" width="4" height="4" fill="#6EE7B7" class="pixel-pulse pixel-pop"/>
        <rect x="27" y="23" width="10" height="2" fill="#6EE7B7" class="pixel-pop"/>
        <rect x="14" y="28" width="6" height="10" fill-opacity=".45"/>
        <rect x="44" y="28" width="6" height="10" fill-opacity=".45"/>
        <rect x="26" y="30" width="12" height="12" fill="#F7F6F1"/>
        <rect x="28" y="36" width="3" height="3" fill="#6EE7B7" class="pixel-pop"/>
        <rect x="33" y="35" width="3" height="3" fill="#0F766E"/>
        <rect x="38" y="34" width="3" height="3" fill="#6EE7B7" class="pixel-pop"/>
      </g>
      <rect class="pixel-robot-foot pixel-robot-foot-a" x="22" y="48" width="6" height="4" fill-opacity=".45"/>
      <rect class="pixel-robot-foot pixel-robot-foot-b" x="36" y="48" width="6" height="4" fill-opacity=".45"/>
      <rect class="pixel-robot-spark pixel-robot-spark-a" x="8" y="12" width="2" height="2" fill-opacity=".5"/>
      <rect class="pixel-robot-spark pixel-robot-spark-b" x="54" y="14" width="2" height="2" fill-opacity=".5"/>
    </g>

    <!-- Resume: pixel folder / paper list. -->
    <g v-else-if="scene === 'resume'" fill="#0F766E">
      <rect x="10" y="18" width="44" height="32" fill-opacity=".5"/>
      <rect x="14" y="14" width="18" height="6" fill-opacity=".45"/>
      <rect x="16" y="22" width="32" height="24" fill="#F7F6F1"/>
      <rect x="16" y="22" width="32" height="2" fill-opacity=".5"/>
      <rect x="20" y="28" width="6" height="2" fill-opacity=".45"/>
      <rect x="29" y="28" width="15" height="2" fill-opacity=".5"/>
      <rect x="20" y="33" width="6" height="2" fill-opacity=".45"/>
      <rect x="29" y="33" width="11" height="2" fill-opacity=".5"/>
      <rect x="20" y="38" width="6" height="2" fill-opacity=".45"/>
      <rect x="29" y="38" width="14" height="2" fill-opacity=".5"/>
      <rect x="20" y="43" width="2" height="2" fill="#6EE7B7" class="pixel-pop"/>
      <rect x="22" y="45" width="2" height="2" fill="#6EE7B7" class="pixel-pop"/>
      <rect x="24" y="43" width="2" height="2" fill="#6EE7B7" class="pixel-pop"/>
      <rect x="26" y="41" width="2" height="2" fill="#6EE7B7" class="pixel-pop"/>
      <rect x="29" y="43" width="13" height="2" fill-opacity=".5"/>
      <rect x="8" y="54" width="2" height="2" fill-opacity=".5"/>
      <rect x="56" y="54" width="2" height="2" fill-opacity=".5"/>
    </g>

    <!-- About: animated notebook / QA checklist. -->
    <g v-else-if="scene === 'about'" fill="#0F766E">
      <rect x="12" y="12" width="40" height="42" fill-opacity=".5"/>
      <rect x="12" y="12" width="40" height="4" fill-opacity=".5"/>
      <rect x="18" y="22" width="28" height="2" fill-opacity=".5"/>
      <rect x="18" y="29" width="20" height="2" fill-opacity=".45"/>
      <rect x="18" y="36" width="26" height="2" fill-opacity=".45"/>
      <rect class="pixel-check-line" x="18" y="43" width="18" height="2" fill-opacity=".45"/>
      <g class="pixel-check-pop" fill="#6EE7B7">
        <rect x="42" y="38" width="3" height="3"/><rect x="45" y="41" width="3" height="3"/><rect x="48" y="38" width="3" height="3"/>
      </g>
      <g class="pixel-robot-spark pixel-robot-spark-a" fill-opacity=".5">
        <rect x="8" y="54" width="2" height="2"/><rect x="56" y="54" width="2" height="2"/>
      </g>
    </g>

    <!-- Craft: QA test pipeline / checklist. -->
    <g v-else-if="scene === 'craft'" fill="#0F766E">
      <rect x="10" y="18" width="44" height="28" fill-opacity=".25"/>
      <rect x="10" y="18" width="44" height="4" fill-opacity=".4"/>
      <rect x="16" y="28" width="8" height="8" fill="#F7F6F1"/>
      <rect x="18" y="31" width="4" height="2" fill="#6EE7B7" class="pixel-pop"/>
      <rect x="28" y="28" width="8" height="8" fill="#F7F6F1"/>
      <rect x="30" y="31" width="4" height="2" fill="#0F766E"/>
      <rect x="40" y="28" width="8" height="8" fill="#F7F6F1"/>
      <rect x="42" y="31" width="4" height="2" fill="#6EE7B7" class="pixel-pop"/>
      <rect x="18" y="38" width="30" height="2" fill-opacity=".4"/>
      <rect x="30" y="10" width="4" height="8" fill-opacity=".4"/>
      <rect x="28" y="8" width="8" height="2" fill-opacity=".4"/>
      <rect x="8" y="52" width="2" height="2" fill-opacity=".3"/>
      <rect x="56" y="52" width="2" height="2" fill-opacity=".3"/>
    </g>

    <!-- Experience: QA timeline. -->
    <g v-else-if="scene === 'experience'" fill="#0F766E">
      <rect x="12" y="12" width="40" height="42" fill-opacity=".2"/>
      <rect x="12" y="12" width="40" height="4" fill-opacity=".4"/>
      <rect x="22" y="8" width="4" height="8" fill-opacity=".45"/>
      <rect x="38" y="8" width="4" height="8" fill-opacity=".45"/>
      <rect x="18" y="22" width="28" height="2" fill-opacity=".35"/>
      <rect x="18" y="30" width="28" height="2" fill-opacity=".35"/>
      <rect x="18" y="38" width="28" height="2" fill-opacity=".35"/>
      <rect x="18" y="46" width="28" height="2" fill-opacity=".35"/>
      <rect x="18" y="22" width="2" height="26" fill-opacity=".4"/>
      <rect x="30" y="22" width="2" height="26" fill-opacity=".35"/>
      <rect x="44" y="22" width="2" height="26" fill-opacity=".35"/>
      <rect x="8" y="54" width="2" height="2" fill-opacity=".3"/>
      <rect x="56" y="54" width="2" height="2" fill-opacity=".3"/>
    </g>

    <!-- Work: project grid / test cases. -->
    <g v-else-if="scene === 'work'" fill="#0F766E">
      <rect x="10" y="18" width="44" height="32" fill-opacity=".2"/>
      <rect x="14" y="14" width="18" height="6" fill-opacity=".35"/>
      <rect x="16" y="24" width="12" height="8" fill="#F7F6F1"/>
      <rect x="34" y="24" width="12" height="8" fill="#F7F6F1"/>
      <rect x="16" y="36" width="12" height="8" fill="#F7F6F1"/>
      <rect x="34" y="36" width="12" height="8" fill="#F7F6F1"/>
      <rect x="19" y="27" width="6" height="2" fill="#6EE7B7" class="pixel-pop"/>
      <rect x="37" y="27" width="6" height="2" fill="#0F766E"/>
      <rect x="19" y="39" width="6" height="2" fill="#0F766E"/>
      <rect x="37" y="39" width="6" height="2" fill="#6EE7B7" class="pixel-pop"/>
      <rect x="8" y="54" width="2" height="2" fill-opacity=".3"/>
      <rect x="56" y="54" width="2" height="2" fill-opacity=".3"/>
    </g>

    <!-- Skills: toolkit. -->
    <g v-else-if="scene === 'skills'" fill="#0F766E">
      <rect x="14" y="22" width="36" height="28" fill-opacity=".2"/>
      <rect x="14" y="22" width="36" height="4" fill-opacity=".35"/>
      <rect x="18" y="26" width="28" height="20" fill-opacity=".15"/>
      <rect x="20" y="32" width="8" height="8" fill="#F7F6F1"/>
      <rect x="36" y="32" width="8" height="8" fill="#F7F6F1"/>
      <rect x="22" y="34" width="4" height="4" fill="#6EE7B7" class="pixel-pulse pixel-pop"/>
      <rect x="38" y="34" width="4" height="4" fill="#0F766E" class="pixel-pulse"/>
      <rect x="24" y="18" width="16" height="4" fill-opacity=".4"/>
      <rect x="26" y="14" width="12" height="4" fill-opacity=".4"/>
      <rect x="8" y="54" width="2" height="2" fill-opacity=".3"/>
      <rect x="56" y="54" width="2" height="2" fill-opacity=".3"/>
    </g>

    <!-- Contact: message / send. -->
    <g v-else-if="scene === 'contact'" fill="#0F766E">
      <rect x="10" y="18" width="44" height="30" fill-opacity=".2"/>
      <rect x="10" y="18" width="44" height="4" fill-opacity=".35"/>
      <rect x="10" y="44" width="44" height="4" fill-opacity=".25"/>
      <rect x="14" y="24" width="36" height="16" fill="#F7F6F1"/>
      <rect x="16" y="26" width="32" height="2" fill-opacity=".35"/>
      <rect x="16" y="30" width="24" height="2" fill-opacity=".3"/>
      <rect x="16" y="34" width="28" height="2" fill-opacity=".3"/>
      <rect x="42" y="34" width="3" height="3" fill="#6EE7B7" class="pixel-pop"/>
      <rect x="45" y="37" width="3" height="3" fill="#6EE7B7" class="pixel-pop"/>
      <rect x="48" y="34" width="3" height="3" fill="#6EE7B7" class="pixel-pop"/>
      <rect x="8" y="54" width="2" height="2" fill-opacity=".3"/>
      <rect x="56" y="54" width="2" height="2" fill-opacity=".3"/>
    </g>

    <!-- Fallback: simple pixel scene for other sections. -->
    <g v-else fill="#0F766E">
      <rect x="14" y="18" width="36" height="28" fill-opacity=".5"/>
      <rect x="14" y="18" width="36" height="4" fill-opacity=".45"/>
      <rect x="20" y="28" width="10" height="10" fill="#F7F6F1"/>
      <rect x="34" y="28" width="10" height="10" fill="#F7F6F1"/>
      <rect x="23" y="31" width="4" height="4" fill="#6EE7B7" class="pixel-check-pop pixel-pulse pixel-pop"/>
      <rect x="37" y="31" width="4" height="4" fill="#0F766E" class="pixel-check-pop pixel-pulse"/>
      <rect class="pixel-robot-spark pixel-robot-spark-a" x="8" y="54" width="2" height="2" fill-opacity=".5"/>
      <rect class="pixel-robot-spark pixel-robot-spark-b" x="56" y="54" width="2" height="2" fill-opacity=".5"/>
    </g>
  </svg>
</template>

<script setup>
defineProps({
  scene: { type: String, default: 'profile' },
})
</script>