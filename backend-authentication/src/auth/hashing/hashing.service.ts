/**
 * Servico abstrato de Hash
 * Trata servicos de criptografia
 */
export abstract class HashingService {
    /**
     * Gera um hash para a senha do usuário
     * @param {string} password senha do usuário
     */
    abstract hash(password: string): Promise<string>;

    /**
     * Compara se uma senha é condiz com o hash da senha
     * @example
     * compare('senha', '1adsadsadada')
     * @param {string} password senha do usuário
     * @param {string}passwordHash hash da senha
     * @returns verdadeiro===logado ou falso===senha errada
     */
    abstract compare(password: string, passwordHash: string): Promise<boolean>;

}