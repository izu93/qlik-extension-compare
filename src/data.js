// data.js - Data configuration for QAE (Qlik Analytics Engine)
export default {
  targets: [
    {
      path: "/qHyperCubeDef", // Path to hypercube definition
      dimensions: {
        min: 0, // Minimum dimensions allowed
        max: 20, // Maximum dimensions allowed
        description: (properties, dimensions) => {
          return dimensions?.length ? `${dimensions.length} dimension(s)` : 'Add dimension';
        }
      },
      measures: {
        min: 0, // Minimum measures allowed
        max: 20, // Maximum measures allowed  
        description: (properties, measures) => {
          return measures?.length ? `${measures.length} measure(s)` : 'Add measure';
        }
      },
    },
  ],
}; 