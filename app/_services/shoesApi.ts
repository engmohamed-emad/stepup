const SHOES_API_URL = "https://6a9cdf67a1b37296ad4bb837.mockapi.io/api/v1";

export const SHOES_API_ENDPOINTS = {
    GET_ALL_SHOES: `${SHOES_API_URL}/shoes`,
    GET_SHOE_BY_ID: (id: string) => `${SHOES_API_URL}/shoes/${id}`,
    CREATE_SHOE: `${SHOES_API_URL}/shoes`,
    UPDATE_SHOE: (id: string) => `${SHOES_API_URL}/shoes/${id}`,
    DELETE_SHOE: (id: string) => `${SHOES_API_URL}/shoes/${id}`,
};

export const SHOES_API_METHODS = {
    async getAllShoes() {
        const response = await fetch(SHOES_API_ENDPOINTS.GET_ALL_SHOES);
        if (!response.ok) {
            throw new Error("Failed to fetch shoes");
        }
        const data = await response.json();
        console.log(data);
        return data;
    },

    async getShoeById(id: string) {
        const response = await fetch(SHOES_API_ENDPOINTS.GET_SHOE_BY_ID(id));
        if (!response.ok) {
            throw new Error(`Failed to fetch shoe with id ${id}`);
        }
        return response.json();
    },

    async createShoe(shoeData: any) {
        const response = await fetch(SHOES_API_ENDPOINTS.CREATE_SHOE, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(shoeData),
        });
        if (!response.ok) {
            throw new Error("Failed to create shoe");
        }
        return response.json();
    },

    async updateShoe(id: string, shoeData: any) {
        const response = await fetch(SHOES_API_ENDPOINTS.UPDATE_SHOE(id), {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(shoeData),
        });
        if (!response.ok) {
            throw new Error(`Failed to update shoe with id ${id}`);
        }
        return response.json();
    },

    async deleteShoe(id: string) {
        const response = await fetch(SHOES_API_ENDPOINTS.DELETE_SHOE(id), {
            method: "DELETE",
        });
        if (!response.ok) {
            throw new Error(`Failed to delete shoe with id ${id}`);
        }
        return response.json();
    },
};  