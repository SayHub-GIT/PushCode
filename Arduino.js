#define led1 13 // variabel dan angka yang inputkan
#define led2 12
#define led3 11

void setup() {
  pinMode(led1, OUTPUT); // Membuat logika I/O
  pinMode(led2, OUTPUT);
  pinMode(led3, OUTPUT);
}

void loop() {
  digitalWrite(led1, HIGH); // Membuat logika dari lampu HIGH untuk Menyala
  delay(4000); // Membuat lampu menyala selama beberapa detik dengan sesuai milidetik yang di inputkan
  digitalWrite(led2, HIGH);
  delay(5000);
  digitalWrite(led2, LOW); // Membuat Lampu menjadi mati LOW untuk mematikan
  digitalWrite(led1, HIGH);
  delay(1000);
  digitalWrite(led1, LOW);
  digitalWrite(led3, HIGH);
  delay(15000);
  digitalWrite(led3, LOW);
  }
