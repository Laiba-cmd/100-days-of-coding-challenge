function make_sandwich(...items: string[]) {
    console.log(`Making a sandwich with: ${items.join(", ")}.`);
  }
  
  make_sandwich('lettuce', 'onion', 'tomato', 'honey mustard')
  make_sandwich('burger', 'ketchup', 'lettuce')
  make_sandwich('subway', 'lettuce', 'onion', 'tomato');