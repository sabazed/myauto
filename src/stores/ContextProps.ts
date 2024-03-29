import { BargainType } from "../models/BargainType";
import Category from "../models/Category";
import { CategoryType } from "../models/CategoryType";
import Manufacturer from "../models/Manufacturer";
import Model from "../models/Model";
import Product from "../models/Product";
import { RentType } from "../models/RentType";

export interface ContextProps {
    children: React.ReactNode
}

export interface CentralContextProps {
    getCategories: (type: CategoryType) => Category[];
    getAllCategories: () => Category[];
    getManufacturers: (type: CategoryType) => Manufacturer[];
    getAllManufacturers: () => Manufacturer[];
    getModels: (manufacturerIds: number[], storage: StorageContextProps) => Promise<void>;
    getProducts: (storage: StorageContextProps, nextCall: boolean, manufacturers?: number[], models?: number[], categories?: number[],
                  priceFrom?: number, priceTo?: number, currency?: number, period?: string,
                  bargain?: BargainType, rentTypes?: RentType[], sort?: number, page?: number) => Promise<void>;
    getAllProducts: (storage: StorageContextProps) => void;  
    getNextProducts: (storage: StorageContextProps) => void;  
}

export interface StorageContextProps {
    models: Model[];
    products: Product[]; 
    currency: number;
    totalVehicles: number;
    currPage: number;
    lastPage: number;
    period: string;
    sort: number;
    loadGlobal: boolean;
    loadLocal: boolean;
    lastProducts: string;
    setModels: (models: Model[]) => void;
    setProducts: (products: Product[]) => void;
    setCurrency: (currency: number) => void;
    setTotalVehicles: (totalVehicles: number) => void;
    setCurrPage: (currPage: number) => void;
    setLastPage: (lastPage: number) => void;
    setPeriod: (period: string) => void;
    setSort: (sort: number) => void;
    setLoadGlobal: (loadGlobal: boolean) => void;
    setLoadLocal: (loadLocal: boolean) => void;
    setLastProducts: (last: string) => void;
}