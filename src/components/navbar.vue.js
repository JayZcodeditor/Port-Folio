import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/vue/24/outline';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const navigation = [
    { name: 'Profile', href: '#Profile', current: true },
    { name: 'Interest', href: '#Interest', current: false },
    { name: 'Projects', href: '#Projects', current: false },
    { name: 'Hobby', href: '#Hobby', current: false },
];
const __VLS_fnComponent = (await import('vue')).defineComponent({});
;
let __VLS_functionalComponentProps;
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_localComponents = {
        ...{},
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_components;
    const __VLS_localDirectives = {
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_directives;
    let __VLS_styleScopedClasses;
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.nav, __VLS_intrinsicElements.nav)({ ...{ class: ("flex items-center justify-between p-6 lg:px-8") }, "aria-label": ("Global"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex lg:flex-1") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ("#"), ...{ class: ("-m-1.5 p-1.5") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("sr-only") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ ...{ class: ("h-8 w-auto") }, src: ("https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"), alt: (""), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex lg:hidden") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                __VLS_ctx.mobileMenuOpen = true;
            } }, type: ("button"), ...{ class: ("-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("sr-only") }, });
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.Bars3Icon;
    /** @type { [typeof __VLS_components.Bars3Icon, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ class: ("h-6 w-6") }, "aria-hidden": ("true"), }));
    const __VLS_2 = __VLS_1({ ...{ class: ("h-6 w-6") }, "aria-hidden": ("true"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("hidden lg:flex lg:gap-x-12") }, });
    for (const [item] of __VLS_getVForSourceType((__VLS_ctx.navigation))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ key: ((item.name)), href: ((item.href)), ...{ class: ("text-sm font-semibold leading-6 text-gray-900") }, });
        (item.name);
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("hidden lg:flex lg:flex-1 lg:justify-end") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ("#"), ...{ class: ("text-sm font-semibold leading-6 text-gray-900") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ "aria-hidden": ("true"), });
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['justify-between'];
    __VLS_styleScopedClasses['p-6'];
    __VLS_styleScopedClasses['lg:px-8'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['lg:flex-1'];
    __VLS_styleScopedClasses['-m-1.5'];
    __VLS_styleScopedClasses['p-1.5'];
    __VLS_styleScopedClasses['sr-only'];
    __VLS_styleScopedClasses['h-8'];
    __VLS_styleScopedClasses['w-auto'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['lg:hidden'];
    __VLS_styleScopedClasses['-m-2.5'];
    __VLS_styleScopedClasses['inline-flex'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['justify-center'];
    __VLS_styleScopedClasses['rounded-md'];
    __VLS_styleScopedClasses['p-2.5'];
    __VLS_styleScopedClasses['text-gray-700'];
    __VLS_styleScopedClasses['sr-only'];
    __VLS_styleScopedClasses['h-6'];
    __VLS_styleScopedClasses['w-6'];
    __VLS_styleScopedClasses['hidden'];
    __VLS_styleScopedClasses['lg:flex'];
    __VLS_styleScopedClasses['lg:gap-x-12'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['font-semibold'];
    __VLS_styleScopedClasses['leading-6'];
    __VLS_styleScopedClasses['text-gray-900'];
    __VLS_styleScopedClasses['hidden'];
    __VLS_styleScopedClasses['lg:flex'];
    __VLS_styleScopedClasses['lg:flex-1'];
    __VLS_styleScopedClasses['lg:justify-end'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['font-semibold'];
    __VLS_styleScopedClasses['leading-6'];
    __VLS_styleScopedClasses['text-gray-900'];
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    const __VLS_refs = {};
    var $refs;
    return {
        slots: __VLS_slots,
        refs: $refs,
        attrs: {},
    };
}
;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            Bars3Icon: Bars3Icon,
            navigation: navigation,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
