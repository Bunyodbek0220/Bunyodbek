class Magic {
  
  replace(string, a, b) {
    return string.split(a).join(b);
  }

  
  length(data) {
    return data.toString().length;
  }

  
  toUpperCase(string) {
    const map = {
      a: "A", b: "B", c: "C", d: "D", e: "E",
      f: "F", g: "G", h: "H", i: "I", j: "J",
      k: "K", l: "L", m: "M", n: "N", o: "O",
      p: "P", q: "Q", r: "R", s: "S", t: "T",
      u: "U", v: "V", w: "W", x: "X", y: "Y", z: "Z"
    };

    let res = "";
    for (let ch of string) {
      res += map[ch] || ch;
    }
    return res;
  }

  
  repeat(data, n) {
    let res = "";
    for (let i = 0; i < n; i++) {
      res += data + " ";
    }
    return res.trim();
  }

  
  count(string) {
    let obj = {};
    for (let ch of string) {
      if (ch === " ") continue;
      obj[ch] = (obj[ch] || 0) + 1;
    }
    return obj;
  }
}


const dead = new Magic();
console.log(dead.replace("hello world", "world", "JS")); 
console.log(dead.length(12345));                         
console.log(dead.toUpperCase("hello js"));               
console.log(dead.repeat("salom", 3));                    
console.log(dead.count("hello world"));                  
