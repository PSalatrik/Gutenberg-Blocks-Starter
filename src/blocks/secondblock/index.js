import "./styles.editor.scss";
import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";
//Destructred State Props from the wp object not used anymore after npm install of the blocks and i18n install. This was done to have autocomplete
// const { __ } = wp.i18n;
// const { registerBlockType } = wp.blocks

//function to register the block in javascript, define the Block's Data Structure Object and return the edit and save functions
registerBlockType("oldphillys-blocks/secondblock", {
  title: __("Second Block", "oldphillys-blocks"),
  description: __("Our Second Block", "oldphillys-blocks"),
  category: "layout",
  icon: {
    src: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 0 24 24"
        width="24"
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zm-1.46-5.47L8.41 12.4l-1.06 1.06 3.18 3.18 6-6-1.06-1.06-4.93 4.95z" />
      </svg>
    ),
    background: "#f89",
    foreground: "#fff"
  },
  keywords: [
    __("Philly", "oldphillys-blocks"),
    __("WhoDis", "oldphillys-blocks")
  ],
  //this is what shows up in the editor
  edit: ({ className }) => {
    return <p className={className}>Second Block Editor</p>;
  },
  //this is what gets stored in the database
  save: () => {
    return <p>Saved Content</p>;
  }
});
