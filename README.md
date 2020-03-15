# Zadanie - dynamiczny form
Do rozwiązania zadania nie używaj zewnętrznych bibliotek.

1. Zaciągnij asynchronicznie schemat formularza. Użyj do tego funkcji z pliku `api/form.js`. Aby dostarczyć dane do
komponentu, zaimplementuj hooka `useFormSchema`. Pokaż stan ładowania danych i obsłuż ewentualne błędy ładowania danych.

2. Na podstawie schematu wyrenderuj formularz w komponencie `Form`. Każda sekcja ma być osobnym tabem, pomiędzy którymi
nawigować można się przyciskami poniżej. (W danej chwili tylko jedna sekcja jest widoczna. Przy przejściu stan forma nie powinien być tracony).

3. Po kliknięciu przycisku `submit` dane z formularza powinny wyświetlić się (update poprzedniego outputu)
pod formularzem - zaimplementuj komponent `Results`. Forma outputu - taka jak widać przy odpaleniu aplikacji.
