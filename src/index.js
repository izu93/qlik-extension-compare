import {
  useElement,
  useLayout,
  useEffect,
  useApp,
  useModel,
} from "@nebula.js/stardust";
import objectProperties from "./object-properties";
import extensionDefinition from "./ext";
import dataConfiguration from "./data";

export default function supernova() {
  return {
    qae: {
      properties: objectProperties,
      data: dataConfiguration,
    },
    ext: extensionDefinition,
    component() {
      const element = useElement();
      const layout = useLayout();
      const app = useApp();
      const model = useModel();

      useEffect(() => {
        // Get data from hypercube
        const data = layout.qHyperCube?.qDataPages?.[0]?.qMatrix || [];
        const dimensionCount = layout?.qHyperCube?.qDimensionInfo?.length || 0;
        const measureCount = layout?.qHyperCube?.qMeasureInfo?.length || 0;
        const dimensionInfo = layout?.qHyperCube?.qDimensionInfo || [];
        const measureInfo = layout?.qHyperCube?.qMeasureInfo || [];

        console.log("Extension Data:", {
          rows: data.length,
          dimensions: dimensionCount,
          measures: measureCount,
          sampleData: data.slice(0, 2),
        });

        // Validate field configuration
        if (dimensionCount === 0) {
          element.innerHTML = `
            <div style="padding: 40px; text-align: center; color: #666;">
              <h3>📊 Add Data Fields</h3>
              <p>Please add dimensions and measures to configure the visualization.</p>
              <div style="margin-top: 20px; font-size: 12px;">
               
            
              </div>
            </div>
          `;
          return;
        }

        // Create the extension UI
        element.innerHTML = `
          <div style="
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            font-family: Arial, sans-serif;
            background: #f8f9fa;
            padding: 20px;
            box-sizing: border-box;
          ">
            <h2>🎯 Compare Viz Extension - Working!</h2>
            <div style="margin-top: 20px;">
              <p><strong>Dimensions:</strong> ${dimensionCount}</p>
              ${dimensionInfo
                .map((dim, i) => `<p>• ${dim.qFallbackTitle}</p>`)
                .join("")}
              <p><strong>Measures:</strong> ${measureCount}</p>
              ${measureInfo
                .map((measure, i) => `<p>• ${measure.qFallbackTitle}</p>`)
                .join("")}
            </div>
            <div style="margin-top: 20px; padding: 20px; background: #e8f5e8; border-radius: 8px;">
              <p style="color: #28a745; font-weight: bold;">✅ Extension is working with data!</p>
              <p>Data rows: ${data.length}</p>
            </div>
          </div>
        `;
      }, [layout]);

      return {};
    },
  };
}
