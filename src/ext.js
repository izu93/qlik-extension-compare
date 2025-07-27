// ext.js - Property panel definition for compare extension
export default {
  definition: {
    type: "items",
    component: "accordion",
    items: {
      // Standard data configuration section
      data: {
        uses: "data",
        items: {
          dimensions: {
            uses: "dimensions",
            min: 0,
            max: 20,
          },
          measures: {
            uses: "measures", 
            min: 0,
            max: 20,
          },
        },
      },

      // Standard appearance settings
      appearance: {
        uses: "settings",
        items: {
          general: {
            items: {
              showTitles: {
                defaultValue: true,
              },
              title: {
                defaultValue: "Compare Viz Extension",
              },
              subtitle: {
                defaultValue: "",
              },
              footnote: {
                defaultValue: "",
              },
            },
          },
        },
      },
    },
  },

  support: {
    snapshot: true,
    export: true,
    exportData: false,
  },
};
