import { numberSpeller } from "../utils/manipulator";

it("Spell right in english", () => {
    expect(numberSpeller(30091895, 'and', 'en')).toBe("thirty million ninety one thousand eight hundred and ninety five");
    expect(numberSpeller(3009189, 'and', 'en')).toBe("three million nine thousand one hundred and eighty nine");
    expect(numberSpeller(300918, 'and', 'en')).toBe("three hundred thousand nine hundred and eighteen");
    expect(numberSpeller(30091, 'and', 'en')).toBe("thirty thousand and ninety one");
    expect(numberSpeller(3009, 'and', 'en')).toBe("three thousand and nine");
    expect(numberSpeller(309, 'and', 'en')).toBe("three hundred and nine");
    expect(numberSpeller(30, 'and', 'en')).toBe("thirty");
    expect(numberSpeller(3, 'and', 'en')).toBe("three");
});

it("Spell right in indonesia", () => {
    expect(numberSpeller(30091895, false, 'id')).toBe("tiga puluh juta sembilan puluh satu ribu delapan ratus sembilan puluh lima");
    expect(numberSpeller(3009189, false, 'id')).toBe("tiga juta sembilan ribu seratus delapan puluh sembilan");
    expect(numberSpeller(300918, false, 'id')).toBe("tiga ratus ribu sembilan ratus delapanbelas");
    expect(numberSpeller(30091, false, 'id')).toBe("tiga puluh ribu sembilan puluh satu");
    expect(numberSpeller(3009, false, 'id')).toBe("tiga ribu sembilan");
    expect(numberSpeller(309, false, 'id')).toBe("tiga ratus sembilan");
    expect(numberSpeller(30, false, 'id')).toBe("tiga puluh");
    expect(numberSpeller(3, false, 'id')).toBe("tiga");
});
