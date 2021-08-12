<template>
  <div
    class="flex__hozAlign"
    style="--primaryCheckbox: #eea12a; --grayCheckbox: #fff"
  >
    <input
      class="inp-cbx"
      :name="option.name"
      :id="option.name"
      type="checkbox"
      style="display: none"
      v-model="option.isChecked"
    />

    <label class="flex__hozAlign cbx" :for="option.name"
      ><span>
        <svg width="12px" height="9px" viewbox="0 0 12 9">
          <polyline points="1 5 4 8 11 1"></polyline></svg></span
      ><span :class="{ isCommon: isCommon }" :data-title="option.description">
        {{ option.name }}</span
      ></label
    >
  </div>
</template>

<script>
import { commonsOptions } from "../../store/commands";
export default {
  data() {
    return {
      isCommon: commonsOptions.map((n) => n.name).includes(this.option.name),
    };
  },
  props: {
    option: Object,
  },
};
</script>

<style lang="scss">
.isCommon {
  color: rgba(110, 231, 183) !important;
  &:checked {
    color: white;
  }
}

.cbx {
  user-select: none;
  cursor: pointer;
  span {
    display: inline-block;
    vertical-align: middle;
    transform: translate3d(0, 0, 0);

    &:first-child {
      position: relative;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      transform: scale(1);
      vertical-align: middle;
      border: 1px solid var(--grayCheckbox);
      transition: all 0.2s ease;
      svg {
        position: absolute;
        z-index: 1;
        top: 8px;
        left: 6px;
        fill: none;
        stroke: white;
        stroke-width: 2;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-dasharray: 16px;
        stroke-dashoffset: 16px;
        transition: all 0.3s ease;
        transition-delay: 0.1s;
        transform: translate3d(0, 0, 0);
      }
      &:before {
        content: "";
        width: 100%;
        height: 100%;
        background: var(--primaryCheckbox);
        display: block;
        transform: scale(0);
        opacity: 1;
        border-radius: 50%;
        transition-delay: 0.2s;
        z-index: 2;
      }
    }
    &:last-child {
      margin-left: 8px;
    }
  }
  &:hover span:first-child {
    border-color: var(--primaryCheckbox);
  }
}
.inp-cbx:checked + .cbx {
  span {
    &:first-child {
      border-color: var(--primaryCheckbox);
      background: var(--primaryCheckbox);
      animation: check 0.6s ease;
      svg {
        stroke-dashoffset: 0;
      }
      &:before {
        transform: scale(2.2);
        opacity: 0;
        transition: all 0.6s ease;
      }
    }
    &:last-child {
      color: var(--grayCheckbox);
      transition: all 0.3s ease;
      &:after {
        transform: scaleX(1);
        transition: all 0.3s ease;
      }
    }
  }
}
@keyframes check {
  50% {
    transform: scale(1.2);
  }
}
</style>
