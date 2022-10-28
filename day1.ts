function Slicer(text: string, first_index: number, last_index: number): string {
    let result: string = "";
  
    for (let i = first_index; i < last_index; i++) {
      result += text[i];
    }
    return result;
  }
  
  console.log(Slicer("Learning Typescript is different than Javascript", 9, 19));