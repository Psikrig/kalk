while(true)
{
    var n = prompt("Выберите действие цифрой: 1)сложение, 2)вычитание, 3)умножение, 4)деление");
    var first = prompt("Введите первое число");
    var second = prompt("Введите второе число");
    var ans = 0;
    if (n == 1)
    {
        ans = parseFloat(first) + parseFloat(second);
    }
    if (n == 2)
    {
        ans = parseFloat(first) - parseFloat(second);
    }
    if (n == 3)
    {
        ans = parseFloat(first) * parseFloat(second);
    }
    if (n == 4)
    {
        ans = parseFloat(first) / parseFloat(second);
    }
    alert("Ответ: " + ans);
}