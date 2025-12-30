<template>
    <label class="m-switch">
        <input type="checkbox">
        <span class="slider">
            <slot></slot>
        </span>
    </label>
</template>

<style lang="scss">
.m-switch {
    cursor: pointer;

    input {
        display: none;
    }
}
</style>
