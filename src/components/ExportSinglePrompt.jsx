import React from "react";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import { jsPDF } from "jspdf";

const ExportSinglePrompt = ({ inputs, responseText }) => {
  const handleExport = () => {
    const doc = new jsPDF();
    const lineHeight = 4;
    const margin = 10;
    const pageWidth = doc.internal.pageSize.getWidth() - 2 * margin;
    const pageHeight = doc.internal.pageSize.getHeight() - 2 * margin;
    //set title
    doc.setFontSize(16);
    doc.text("Pentagram Prompt and Gemini Response", 10, 15);

    // Pentagram inputs
    doc.setFontSize(12);
    let yPosition = margin + 15;
    doc.text("Your Prompt:", 10, yPosition);
    yPosition += margin;
    // input fields
    doc.setFontSize(10);
    const labels = ["Persona", "Context", "Task", "Output", "Constraint"];
    inputs.forEach((input, index) => {
      const label = labels[index] || `Input ${index + 1}`;
      let theString = doc.splitTextToSize(`${label}: ${input}`, pageWidth);
      theString.forEach((splitString) => {
        doc.text(splitString, 10, yPosition);
        yPosition += lineHeight;
      });
      yPosition += lineHeight;
    });

    yPosition += margin;
    doc.text("Response:", 10, yPosition);
    yPosition += margin;
    let formattedResponse = responseText;

    //bold
    formattedResponse = formattedResponse.replace(/\*\*(.*?)\*\*/g, "$1");
    //Lists
    formattedResponse = formattedResponse.replace(/\* (.*)/g, "  - $1");

    // Split into lines
    const lines = formattedResponse.split(/\n/);

    lines.forEach((line) => {
      let splitText = doc.splitTextToSize(line, pageWidth);
      splitText.forEach((splitLine) => {
        if (yPosition + lineHeight > pageHeight) {
          doc.addPage();
          yPosition = margin;
        }
        if (splitLine.startsWith("* ")) {
          doc.text("  - " + splitLine.slice(2), margin, yPosition);
        } else {
          doc.text(splitLine, margin, yPosition);
        }
        yPosition += lineHeight;
      });
    });

    doc.save("singlePrompt.pdf");
  };

  return (
    <div>
      <SaveOutlinedIcon
        style={{ fontSize: 34, color: "white", cursor: "pointer" }}
        onClick={handleExport}
      />
    </div>
  );
};

export default ExportSinglePrompt;
