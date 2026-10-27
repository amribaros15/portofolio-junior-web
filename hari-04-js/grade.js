const nilai = Number(prompt('Nilai (0-100):')); 
let grade; 
if (nilai >= 85) grade = 'A'; 
else if (nilai >= 70) grade = 'B'; 
else if (nilai >= 55) grade = 'C'; 
else grade = 'D'; 
console.log(`Grade: ${grade}`); 