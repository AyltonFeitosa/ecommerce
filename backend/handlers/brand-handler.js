const Brand = require("./../db/brand");

async function getBrands() {
    let brands = await Brand.find();
    return brands.map(x => x.toObject());
}

async function getBrand(id) {
    let brand = await Brand.findById(id);
    if (!brand) {
        throw new Error("Brand not found");
    }
    return brand.toObject();
}

async function addBrand(model) {
    let brand = new Brand({
        name: model.name
    });
    await brand.save();
    return brand.toObject();
}

async function updateBrand(id, model) {
    let brand = await Brand.findByIdAndUpdate(id, model, { new: true });
    if (!brand) {
        throw new Error("Brand not found for update");
    }
    return brand.toObject();
}

async function deleteBrand(id) {
    let brand = await Brand.findByIdAndDelete(id);
    if (!brand) {
        throw new Error("Brand not found for deletion");
    }
}

module.exports = { getBrands, getBrand, addBrand, updateBrand, deleteBrand };
