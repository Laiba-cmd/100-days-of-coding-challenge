type Shape = {
    kind: "circle" | "rectangle";
    radius?: number; // Only for circles
    width?: number; // Only for rectangles
    height?: number; // Only for rectangles
  };
  
  // Describing a circle using our Shape type
  let circle: Shape = {
    kind: "circle",
    radius: 6,
  };
  
  // Describing a rectangle using our Shape type
  let rectangle: Shape = {
    kind: "rectangle",
    width: 5,
    height: 15,
  };
  
  console.log(circle); 
  console.log(rectangle); 