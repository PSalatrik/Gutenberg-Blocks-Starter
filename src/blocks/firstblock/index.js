var registerBlockType = wp.blocks.registerBlockType;
var __ = wp.i18n.__;
var el = wp.element.createElement;

registerBlockType("oldphillys-blocks/firstblock", {
  title: __("First Block", "oldphillys-blocks"),
  description: __("Our First Block", "oldphillys-blocks"),
  category: "layout",
  icon: {
    src: "admin-site",
    background: "#f89",
    foreground: "#fff"
  },
  keywords: [
    __("Philly", "oldphillys-blocks"),
    __("WhoDis", "oldphillys-blocks")
  ],
  edit: function() {
    return el("p", null, "Editor");
  },
  save: function() {
    return el("p", null, "Saved Content");
  }
});
