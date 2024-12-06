import { Error, Checkbox, Label, File, Form, Group, Input, Radio, SelectChild, Select, Submit, Textarea } from '@protonemedia/form-components-pro-vue3-core';
export { Error, Form, Label, Submit } from '@protonemedia/form-components-pro-vue3-core';
import { openBlock, createElementBlock, toDisplayString, resolveComponent, createElementVNode, withDirectives, mergeProps, toHandlers, vModelCheckbox, renderSlot, createTextVNode, createBlock, createCommentVNode, createVNode, normalizeClass, withModifiers, Fragment, renderList, vModelDynamic, vModelSelect, vModelText } from 'vue';

const _hoisted_1$a = { class: "text-red-600 text-sm mt-2" };

function render$a(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("p", _hoisted_1$a, toDisplayString(_ctx.message), 1))
}

Error.render = render$a;

var script$6 = {
  mixins: [Checkbox],
  components: { Error },
};

const _hoisted_1$9 = { class: "flex flex-col" };
const _hoisted_2$7 = { class: "flex items-center" };
const _hoisted_3$5 = ["name", "value"];
const _hoisted_4$2 = { class: "ml-2" };

function render$9(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Error = resolveComponent("Error");

  return (openBlock(), createElementBlock("div", _hoisted_1$9, [
    createElementVNode("label", _hoisted_2$7, [
      withDirectives(createElementVNode("input", mergeProps({
        name: _ctx.name,
        value: _ctx.value,
        type: "checkbox"
      }, _ctx.$attrs, toHandlers(_ctx.listenersWithoutChange), {
        "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => ((_ctx.model) = $event)),
        class: "rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 disabled:opacity-50"
      }), null, 16, _hoisted_3$5), [
        [vModelCheckbox, _ctx.model]
      ]),
      createElementVNode("span", _hoisted_4$2, [
        renderSlot(_ctx.$slots, "default", {}, () => [
          createTextVNode(toDisplayString(_ctx.label), 1)
        ])
      ])
    ]),
    (_ctx.errorMessage)
      ? (openBlock(), createBlock(_component_Error, {
          key: 0,
          message: _ctx.errorMessage
        }, null, 8, ["message"]))
      : createCommentVNode("", true)
  ]))
}

script$6.render = render$9;

const _hoisted_1$8 = {
  key: 0,
  class: "text-gray-700"
};

function render$8(_ctx, _cache, $props, $setup, $data, $options) {
  return (_ctx.label)
    ? (openBlock(), createElementBlock("span", _hoisted_1$8, toDisplayString(_ctx.label), 1))
    : createCommentVNode("", true)
}

Label.render = render$8;

var script$5 = {
  components: {
    Error,
    Label,
  },

  mixins: [File],
};

const _hoisted_1$7 = { class: "mt-4" };
const _hoisted_2$6 = { class: "block" };
const _hoisted_3$4 = /*#__PURE__*/createTextVNode("Browse...");
const _hoisted_4$1 = ["name", "multiple"];
const _hoisted_5$1 = {
  key: 0,
  class: "mt-2 text-sm italic"
};

function render$7(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Label = resolveComponent("Label");
  const _component_Error = resolveComponent("Error");

  return (openBlock(), createElementBlock("div", _hoisted_1$7, [
    createElementVNode("label", _hoisted_2$6, [
      createVNode(_component_Label, { label: _ctx.label }, null, 8, ["label"]),
      createElementVNode("div", {
        class: normalizeClass({ 'mt-1': _ctx.label })
      }, [
        createElementVNode("a", {
          onSubmit: _cache[0] || (_cache[0] = withModifiers(() => {}, ["prevent"])),
          class: "inline-block px-3 py-2 rounded-md border border-gray-300 shadow-sm bg-gray-100 hover:bg-gray-300 py-1 cursor-pointer relative"
        }, [
          renderSlot(_ctx.$slots, "default", {}, () => [
            _hoisted_3$4
          ]),
          createElementVNode("input", mergeProps({
            name: _ctx.name,
            multiple: _ctx.multiple,
            type: "file"
          }, _ctx.$attrs, toHandlers(_ctx.listenersWithFileChange), {
            ref: "input",
            class: "invisible absolute inset-0 w-full h-full disabled:opacity-50"
          }), null, 16, _hoisted_4$1)
        ], 32),
        renderSlot(_ctx.$slots, "filenames", {}, () => [
          (_ctx.model)
            ? (openBlock(), createElementBlock("div", _hoisted_5$1, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.filenames, (filename, key) => {
                  return (openBlock(), createElementBlock("p", { key: key }, toDisplayString(filename), 1))
                }), 128))
              ]))
            : createCommentVNode("", true)
        ])
      ], 2)
    ]),
    (_ctx.errorMessage)
      ? (openBlock(), createBlock(_component_Error, {
          key: 0,
          message: _ctx.errorMessage
        }, null, 8, ["message"]))
      : createCommentVNode("", true)
  ]))
}

script$5.render = render$7;

const _hoisted_1$6 = ["method"];
const _hoisted_2$5 = ["disabled"];

function render$6(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("form", mergeProps(_ctx.$attrs, { method: _ctx.method }), [
    createElementVNode("fieldset", { disabled: _ctx.isProcessing }, [
      renderSlot(_ctx.$slots, "default")
    ], 8, _hoisted_2$5)
  ], 16, _hoisted_1$6))
}

Form.render = render$6;

var script$4 = {
  mixins: [Group],
  components: { Error, Label },
};

const _hoisted_1$5 = { class: "mt-4" };

function render$5(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Label = resolveComponent("Label");
  const _component_Error = resolveComponent("Error");

  return (openBlock(), createElementBlock("div", _hoisted_1$5, [
    createVNode(_component_Label, { label: _ctx.label }, null, 8, ["label"]),
    createElementVNode("div", {
      class: normalizeClass({
        'mt-2': _ctx.label,
        'flex flex-wrap space-x-6': _ctx.inline,
        'space-y-4': !_ctx.inline,
      })
    }, [
      renderSlot(_ctx.$slots, "default")
    ], 2),
    (_ctx.errorMessage)
      ? (openBlock(), createBlock(_component_Error, {
          key: 0,
          message: _ctx.errorMessage
        }, null, 8, ["message"]))
      : createCommentVNode("", true)
  ]))
}

script$4.render = render$5;

var script$3 = {
  components: {
    Error,
    Label,
  },

  mixins: [Input],
};

const _hoisted_1$4 = { class: "block" };
const _hoisted_2$4 = ["name", "type"];

function render$4(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Label = resolveComponent("Label");
  const _component_Error = resolveComponent("Error");

  return (openBlock(), createElementBlock("div", {
    class: normalizeClass({ hidden: _ctx.type == 'hidden', 'mt-4': _ctx.label })
  }, [
    createElementVNode("label", _hoisted_1$4, [
      createVNode(_component_Label, { label: _ctx.label }, null, 8, ["label"]),
      withDirectives(createElementVNode("input", mergeProps({
        name: _ctx.name,
        type: _ctx.type
      }, _ctx.$attrs, toHandlers(_ctx.listenersWithoutInput), {
        "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => ((_ctx.model) = $event)),
        ref: "input",
        class: ["block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 disabled:opacity-50", { 'mt-1': _ctx.label }]
      }), null, 16, _hoisted_2$4), [
        [vModelDynamic, _ctx.model]
      ])
    ]),
    (_ctx.errorMessage)
      ? (openBlock(), createBlock(_component_Error, {
          key: 0,
          message: _ctx.errorMessage
        }, null, 8, ["message"]))
      : createCommentVNode("", true)
  ], 2))
}

script$3.render = render$4;

var script$2 = {
  components: {
    Error,
  },

  mixins: [Radio],
};

const _hoisted_1$3 = { class: "inline-flex items-center" };
const _hoisted_2$3 = ["name", "value", "checked"];
const _hoisted_3$3 = { class: "ml-2" };

function render$3(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Error = resolveComponent("Error");

  return (openBlock(), createElementBlock("div", null, [
    createElementVNode("label", _hoisted_1$3, [
      createElementVNode("input", mergeProps({
        name: _ctx.name,
        value: _ctx.value,
        checked: _ctx.checked,
        onChange: _cache[0] || (_cache[0] = (...args) => (_ctx.emitChange && _ctx.emitChange(...args))),
        type: "radio"
      }, _ctx.$attrs, toHandlers(_ctx.listenersWithoutChange), { class: "rounded-full border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 disabled:opacity-50" }), null, 16, _hoisted_2$3),
      createElementVNode("span", _hoisted_3$3, [
        renderSlot(_ctx.$slots, "default", {}, () => [
          createTextVNode(toDisplayString(_ctx.label), 1)
        ])
      ])
    ]),
    (_ctx.errorMessage)
      ? (openBlock(), createBlock(_component_Error, {
          key: 0,
          message: _ctx.errorMessage
        }, null, 8, ["message"]))
      : createCommentVNode("", true)
  ]))
}

script$2.render = render$3;

var script$1 = {
  components: {
    Error,
    Label,
    SelectChild,
  },

  mixins: [Select],
};

const _hoisted_1$2 = { class: "mt-4" };
const _hoisted_2$2 = { class: "block" };
const _hoisted_3$2 = ["name", "multiple", "disabled"];

function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Label = resolveComponent("Label");
  const _component_SelectChild = resolveComponent("SelectChild");
  const _component_Error = resolveComponent("Error");

  return (openBlock(), createElementBlock("div", _hoisted_1$2, [
    createElementVNode("label", _hoisted_2$2, [
      createVNode(_component_Label, { label: _ctx.label }, null, 8, ["label"]),
      withDirectives(createElementVNode("select", mergeProps({
        name: _ctx.name,
        multiple: _ctx.multiple,
        disabled: _ctx.disabled
      }, _ctx.$attrs, toHandlers(_ctx.listenersWithoutInput), {
        "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => ((_ctx.model) = $event)),
        ref: "select",
        class: ["block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 disabled:opacity-50", { 'mt-1': _ctx.label }]
      }), [
        renderSlot(_ctx.$slots, "default", {}, () => [
          (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.mappedOptions, (option, key) => {
            return (openBlock(), createBlock(_component_SelectChild, {
              key: key,
              option: option
            }, null, 8, ["option"]))
          }), 128))
        ])
      ], 16, _hoisted_3$2), [
        [vModelSelect, _ctx.model]
      ])
    ]),
    (_ctx.errorMessage)
      ? (openBlock(), createBlock(_component_Error, {
          key: 0,
          message: _ctx.errorMessage
        }, null, 8, ["message"]))
      : createCommentVNode("", true)
  ]))
}

script$1.render = render$2;

const _hoisted_1$1 = { class: "mt-6 flex items-center justify-between" };
const _hoisted_2$1 = ["type"];
const _hoisted_3$1 = { class: "flex flex-row items-center justify-center" };
const _hoisted_4 = {
  key: 0,
  class: "animate-spin mr-3 h-5 w-5 text-white",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24"
};
const _hoisted_5 = /*#__PURE__*/createElementVNode("circle", {
  class: "opacity-25",
  cx: "12",
  cy: "12",
  r: "10",
  stroke: "currentColor",
  "stroke-width": "4"
}, null, -1);
const _hoisted_6 = /*#__PURE__*/createElementVNode("path", {
  class: "opacity-75",
  fill: "currentColor",
  d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
}, null, -1);
const _hoisted_7 = [
  _hoisted_5,
  _hoisted_6
];

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("div", _hoisted_1$1, [
    createElementVNode("button", mergeProps(_ctx.$attrs, {
      type: _ctx.type,
      class: "rounded-md shadow-sm bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline"
    }), [
      renderSlot(_ctx.$slots, "default", {}, () => [
        createElementVNode("div", _hoisted_3$1, [
          (_ctx.isProcessing)
            ? (openBlock(), createElementBlock("svg", _hoisted_4, _hoisted_7))
            : createCommentVNode("", true),
          createElementVNode("span", {
            class: normalizeClass({ 'opacity-50': _ctx.isProcessing })
          }, toDisplayString(_ctx.label), 3)
        ])
      ])
    ], 16, _hoisted_2$1)
  ]))
}

Submit.render = render$1;

var script = {
  components: { Error, Label },
  mixins: [Textarea],
};

const _hoisted_1 = { class: "mt-4" };
const _hoisted_2 = { class: "block" };
const _hoisted_3 = ["name"];

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Label = resolveComponent("Label");
  const _component_Error = resolveComponent("Error");

  return (openBlock(), createElementBlock("div", _hoisted_1, [
    createElementVNode("label", _hoisted_2, [
      createVNode(_component_Label, { label: _ctx.label }, null, 8, ["label"]),
      withDirectives(createElementVNode("textarea", mergeProps({ name: _ctx.name }, _ctx.$attrs, toHandlers(_ctx.listenersWithoutInput), {
        "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => ((_ctx.model) = $event)),
        ref: "textarea",
        class: ["block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 disabled:opacity-50", { 'mt-1': _ctx.label }]
      }), null, 16, _hoisted_3), [
        [vModelText, _ctx.model]
      ])
    ]),
    (_ctx.errorMessage)
      ? (openBlock(), createBlock(_component_Error, {
          key: 0,
          message: _ctx.errorMessage
        }, null, 8, ["message"]))
      : createCommentVNode("", true)
  ]))
}

script.render = render;

export { script$6 as Checkbox, script$5 as File, script$4 as Group, script$3 as Input, script$2 as Radio, script$1 as Select, script as Textarea };
